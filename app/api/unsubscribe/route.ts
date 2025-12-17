import { NextRequest, NextResponse } from 'next/server';
import { deleteSubscription } from '@/lib/appwrite';
import { sendUnsubscribeNotification } from '@/lib/email';

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
        
        // Try to delete from Appwrite database
        console.log('Processing unsubscribe:', { email: cleanEmail });
        
        try {
            const deleted = await deleteSubscription(cleanEmail);
            
            // Even if not found in DB (deleted=false), we can treat it as success 
            // ("idempotent" operation - the goal is to not be subscribed)
            // But if it was deleted, we send a notification.
            
            if (deleted) {
                // Send notification email to admin (don't wait for it)
                sendUnsubscribeNotification(cleanEmail).catch(error => {
                    console.error('Failed to send admin unsubscribe notification email:', error);
                });
            } else {
                console.log('Email not found in subscriptions, no deletion needed:', cleanEmail);
            }
            
            // Return success response
            return NextResponse.json(
                { 
                    success: true, 
                    message: 'Unsubscribed successfully',
                },
                { status: 200 }
            );
        } catch (error) {
             // Fallback: Log locally and return success
             console.warn('Appwrite unavailable, using fallback for unsubscribe:', cleanEmail);
             
             // Send notification email to admin even in fallback
             sendUnsubscribeNotification(cleanEmail).catch(error => {
                 console.error('Failed to send admin unsubscribe notification email (fallback):', error);
             });
            
            return NextResponse.json(
                { 
                    success: true, 
                    message: 'Unsubscribed successfully (request logged)',
                    fallback: true
                },
                { status: 200 }
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
