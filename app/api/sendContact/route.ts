import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
    html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Message Confirmation</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background: #f3f4f6;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              background: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
            }
            .header {
              background: linear-gradient(135deg, #7c3aed, #06b6d4);
              padding: 30px;
              text-align: center;
              color: white;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
            }
            .content {
              padding: 30px;
              color: #333333;
            }
            .content h2 {
              color: #7c3aed;
              margin-bottom: 15px;
            }
            .content p {
              line-height: 1.6;
              margin-bottom: 15px;
            }
            .highlight {
              background-color: #f0f9ff;
              padding: 10px;
              border-left: 4px solid #06b6d4;
              font-style: italic;
              color: #0f172a;
              border-radius: 4px;
            }
            .footer {
              background: #f9fafb;
              padding: 20px;
              text-align: center;
              font-size: 13px;
              color: #6b7280;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thanks for contacting us, ${name}!</h1>
            </div>
            <div class="content">
              <h2>We've received your message ✅</h2>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Your message:</strong></p>
              <div class="highlight">"${message}"</div>
              <p>Our team is reviewing your message and will get back to you within 24-48 hours.</p>
              <p>Feel free to reply directly to this email if you have more details to add.</p>
              <p>Best regards,<br><strong>The Team</strong></p>
            </div>
            <div class="footer">
              &copy; ${new Date().getFullYear()} Your Company. All rights reserved.
            </div>
          </div>
        </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
