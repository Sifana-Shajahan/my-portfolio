import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          message: "Please fill in all required fields.",
        },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          message: "Email service is not configured.",
        },
        { status: 500 },
      );
    }

    if (!process.env.CONTACT_EMAIL) {
      return NextResponse.json(
        {
          message: "Contact email is not configured.",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          message: "Unable to send the message.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        message: "Message sent successfully.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        message: "Something went wrong while sending the message.",
      },
      { status: 500 },
    );
  }
}
