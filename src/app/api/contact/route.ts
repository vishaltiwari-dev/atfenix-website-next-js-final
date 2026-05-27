import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is not configured`);
  }

  return value;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const name = payload.name?.trim();
    const email = payload.email?.trim();
    const phone = payload.phone?.trim();
    const service = payload.service?.trim();
    const message = payload.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide your name, email, and project details." },
        { status: 400 }
      );
    }

    const smtpUser = getRequiredEnv("SMTP_USER");
    const smtpFrom = process.env.SMTP_FROM || smtpUser;

    const transporter = nodemailer.createTransport({
      host: getRequiredEnv("SMTP_HOST"),
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: smtpUser,
        pass: process.env.SMTP_PASS || getRequiredEnv("SMTP_PASSWORD")
      }
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeService = escapeHtml(service || "Not selected");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    await transporter.sendMail({
      from: smtpFrom,
      to: smtpUser,
      replyTo: email,
      subject: `New Atfenix enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Service: ${service || "Not selected"}`,
        "",
        "Project details:",
        message
      ].join("\n"),
      html: `
        <h2>New Atfenix enquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Service:</strong> ${safeService}</p>
        <p><strong>Project details:</strong></p>
        <p>${safeMessage}</p>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email failed", error);

    return NextResponse.json(
      { error: "Unable to send your enquiry right now. Please try again." },
      { status: 500 }
    );
  }
}
