import { NextRequest, NextResponse } from 'next/server';
import { createSubscription } from '@/lib/appwrite';
import { sendSubscriptionNotification, sendSubscriptionConfirmation } from '@/lib/email';

export async function POST(request: NextRequest) {
    try {
        // Parse the request body
        const body = await request.json();
        
        // Validate required fields
        const { email } = body;
        
        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
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
        
        const cleanEmail = String(email).trim().toLowerCase();
        
        // Try to save to Appwrite database
        console.log('Saving subscription:', { email: cleanEmail });
        
        try {
            const document = await createSubscription(cleanEmail);
            
            // Send email notifications (don't wait for them to complete)
            const emailPromises = [];
            
            // Send notification email to admin
            emailPromises.push(
                sendSubscriptionNotification(cleanEmail).catch(error => {
                    console.error('Failed to send admin subscription notification email:', error);
                })
            );
            
            // Send confirmation email to subscriber
            emailPromises.push(
                sendSubscriptionConfirmation(cleanEmail).catch(error => {
                    console.error('Failed to send subscription confirmation email:', error);
                })
            );
            
            // Execute email sending in background (don't block response)
            Promise.all(emailPromises).then(() => {
                console.log('Subscription email notifications processed');
            });
            
            // Return success response immediately
            return NextResponse.json(
                { 
                    success: true, 
                    message: 'Subscribed successfully',
                    id: document.$id,
                    data: document
                },
                { status: 201 }
            );
        } catch (error) {
             // Fallback: Log subscription locally and return success
             // This ensures users don't see an error if the database is down/misconfigured
             // but we still want to collect the email via logs/email notification
             console.warn('Appwrite unavailable, using fallback for subscription:', cleanEmail);
             
             // Send email notifications even in fallback mode
            const emailPromises = [];
            
            // Send notification email to admin
            emailPromises.push(
                sendSubscriptionNotification(cleanEmail).catch(error => {
                    console.error('Failed to send admin subscription notification email (fallback):', error);
                })
            );
            
            // Send confirmation email to subscriber
            emailPromises.push(
                sendSubscriptionConfirmation(cleanEmail).catch(error => {
                    console.error('Failed to send subscription confirmation email (fallback):', error);
                })
            );
            
            // Execute email sending in background
            Promise.all(emailPromises).then(() => {
                console.log('Subscription email notifications processed (fallback mode)');
            });
            
            // Generate a mock ID for consistency
            const mockId = `fallback_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            
            return NextResponse.json(
                { 
                    success: true, 
                    message: 'Subscribed successfully (logged locally)',
                    id: mockId,
                    fallback: true
                },
                { status: 201 }
            );
        }
        
    } catch (error) {
        console.error('API route error:', error);
        
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
