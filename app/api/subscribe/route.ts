import { NextRequest, NextResponse } from "next/server";
// keep Appwrite + SES logic
import { createSubscription } from "@/lib/appwrite";
import {
  sendSubscriptionNotification,
  sendSubscriptionConfirmation,
} from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const cleanEmail = String(email).trim().toLowerCase();

    console.log("[/api/subscribe] incoming email:", cleanEmail);

    try {
      // PRIMARY: save to Appwrite (or later Neon)
      const document = await createSubscription(cleanEmail);
      console.log(
        "[/api/subscribe] subscription stored, id:",
        document.$id
      );

      // fire‑and‑forget email notifications
      Promise.all([
        sendSubscriptionNotification(cleanEmail).catch((error) =>
          console.error(
            "[/api/subscribe] admin notification failed:",
            error
          )
        ),
        sendSubscriptionConfirmation(cleanEmail).catch((error) =>
          console.error(
            "[/api/subscribe] confirmation email failed:",
            error
          )
        ),
      ]).then(() =>
        console.log("[/api/subscribe] notification emails processed")
      );

      return NextResponse.json(
        {
          success: true,
          message: "Subscribed successfully",
          id: document.$id,
        },
        { status: 201 }
      );
    } catch (error) {
      console.warn(
        "[/api/subscribe] Appwrite unavailable, fallback mode for:",
        cleanEmail,
        error
      );

      Promise.all([
        sendSubscriptionNotification(cleanEmail).catch((err) =>
          console.error(
            "[/api/subscribe] admin notification failed (fallback):",
            err
          )
        ),
        sendSubscriptionConfirmation(cleanEmail).catch((err) =>
          console.error(
            "[/api/subscribe] confirmation email failed (fallback):",
            err
          )
        ),
      ]).then(() =>
        console.log(
          "[/api/subscribe] notification emails processed (fallback)"
        )
      );

      const mockId = `fallback_${Date.now()}_${Math.random()
        .toString(36)
        .slice(2, 9)}`;

      return NextResponse.json(
        {
          success: true,
          message: "Subscribed successfully (logged locally)",
          id: mockId,
          fallback: true,
        },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error("[/api/subscribe] API route error:", error);

    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}
