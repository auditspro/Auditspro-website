import { NextRequest, NextResponse } from 'next/server';
import { createContactSubmission } from '@/lib/appwrite';
import { sendContactFormNotification, sendAutoReplyEmail } from '@/lib/email';

interface ContactSubmissionData {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    message: string;
    preferredDate?: string;
    preferredTime?: string;
    auditType?: string;
    submittedAt: string;
}

export async function POST(request: NextRequest) {
    try {
        // Parse the request body
        const body = await request.json();
        
        // Validate required fields
        const { name, email, message } = body;
        
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields: name, email, and message are required' },
                { status: 400 }
            );
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }
        
        // Prepare submission data
        const rawMessage = String(message).trim();
        const preferredDate = body.preferredDate ? String(body.preferredDate).trim() : undefined;
        const preferredTime = body.preferredTime ? String(body.preferredTime).trim() : undefined;
        const auditType = body.auditType ? String(body.auditType).trim() : undefined;
        const practiceType = body.practiceType ? String(body.practiceType).trim() : undefined;
        const trustAccounts = body.trustAccounts ? String(body.trustAccounts).trim() : undefined;

        // Append any extra fields to the saved message so nothing is lost
        const extras: string[] = [];
        if (practiceType) extras.push(`Practice Type: ${practiceType}`);
        if (trustAccounts) extras.push(`Trust Accounts: ${trustAccounts}`);
        if (preferredDate) extras.push(`Preferred Date: ${preferredDate}`);
        if (preferredTime) extras.push(`Preferred Time: ${preferredTime}`);
        if (auditType) extras.push(`Audit Type: ${auditType}`);
        const combinedMessage = extras.length > 0
          ? `${rawMessage}\n\n--- Additional Details ---\n${extras.join('\n')}`
          : rawMessage;

        const submissionData: ContactSubmissionData = {
            name: String(name).trim(),
            email: String(email).trim().toLowerCase(),
            phone: body.phone ? String(body.phone).trim() : undefined,
            company: body.company ? String(body.company).trim() : undefined,
            message: combinedMessage,
            preferredDate,
            preferredTime,
            auditType,
            submittedAt: new Date().toISOString()
        };
        
        // Try to save to Appwrite database
        console.log('Saving contact form submission:', { name: submissionData.name, email: submissionData.email });
        
        try {
            const document = await createContactSubmission(submissionData);
            
            // Send email notifications (don't wait for them to complete)
            const emailPromises = [];
            
            // Send notification email to admin
            emailPromises.push(
                sendContactFormNotification(submissionData).catch(error => {
                    console.error('Failed to send admin notification email:', error);
                })
            );
            
            // Send auto-reply email to customer
            emailPromises.push(
                sendAutoReplyEmail(submissionData).catch(error => {
                    console.error('Failed to send auto-reply email:', error);
                })
            );
            
            // Execute email sending in background (don't block response)
            Promise.all(emailPromises).then(() => {
                console.log('Email notifications processed');
            });
            
            // Return success response immediately
            return NextResponse.json(
                { 
                    success: true, 
                    message: 'Contact form submitted successfully',
                    id: document.$id,
                    data: document
                },
                { status: 201 }
            );
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (_error) {
             // Fallback: Log submission locally and return success
             console.warn('Appwrite unavailable, using fallback for:', submissionData.email);
             console.log('Contact submission (fallback):', { 
                 name: submissionData.name, 
                 email: submissionData.email, 
                 company: submissionData.company,
                 submittedAt: submissionData.submittedAt 
             });
            
            // Send email notifications even in fallback mode
            const emailPromises = [];
            
            // Send notification email to admin
            emailPromises.push(
                sendContactFormNotification(submissionData).catch(error => {
                    console.error('Failed to send admin notification email (fallback):', error);
                })
            );
            
            // Send auto-reply email to customer
            emailPromises.push(
                sendAutoReplyEmail(submissionData).catch(error => {
                    console.error('Failed to send auto-reply email (fallback):', error);
                })
            );
            
            // Execute email sending in background
            Promise.all(emailPromises).then(() => {
                console.log('Email notifications processed (fallback mode)');
            });
            
            // Generate a mock ID for consistency
            const mockId = `fallback_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            
            return NextResponse.json(
                { 
                    success: true, 
                    message: 'Contact form submitted successfully (logged locally)',
                    id: mockId,
                    data: { ...submissionData, $id: mockId },
                    fallback: true
                },
                { status: 201 }
            );
        }
        
    } catch (error) {
        console.error('API route error:', error);
        
        // Handle specific Appwrite errors
        if (error && typeof error === 'object' && 'code' in error) {
            const appwriteError = error as { code: number; message?: string };
            if (appwriteError.code === 404) {
                return NextResponse.json(
                    { error: 'Database or collection not found. Please check your Appwrite configuration.' },
                    { status: 500 }
                );
            }
            if (appwriteError.code === 401) {
                return NextResponse.json(
                    { error: 'Authentication failed. Please check your API key.' },
                    { status: 500 }
                );
            }
        }
        
        return NextResponse.json(
            { error: 'Internal server error. Please try again later.' },
            { status: 500 }
        );
    }
}

// Handle unsupported methods
export async function GET() {
    return NextResponse.json(
        { error: 'Method not allowed' },
        { status: 405 }
    );
}
