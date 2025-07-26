import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

//Send Email Conact Page Contact Us
export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { success: false, message: "Missing required fields." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail", // หรือ "hotmail" หรือกำหนด host, port เอง
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: `New message from ${name}: ${subject}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Email sent" });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, message: "Failed to send" }, { status: 500 });
  }
}
