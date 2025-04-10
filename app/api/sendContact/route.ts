import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
// import { env } from "~/env";

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();


 const transporter = nodemailer.createTransport({
  service: "gmail",
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT!),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "We received your message ✔️",
    text: `Hi ${name},\n\nThanks for contacting us regarding: "${subject}".\n\nYour message:\n"${message}"\n\nWe'll respond shortly!\n\n- The Team`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
