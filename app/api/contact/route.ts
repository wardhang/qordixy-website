import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, service, message } = body;

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Configure SMTP transport from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to sales team
    await transporter.sendMail({
      from: `"QORDIXY Website" <${process.env.SMTP_USER}>`,
      to: "sales@qordixy.com",
      replyTo: `"${name}" <${email}>`,
      subject: `New Project Enquiry${service ? ` — ${service}` : ""} from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
        <body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:40px 20px;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
                <!-- Header -->
                <tr>
                  <td style="background:#0A1F44;padding:32px 40px;text-align:center;">
                    <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;">
                      QORDI<span style="color:#00DDEB;">X</span>Y
                    </h1>
                    <p style="margin:8px 0 0;color:rgba(255,255,255,0.5);font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">
                      New Project Enquiry
                    </p>
                  </td>
                </tr>
                <!-- Body -->
                <tr>
                  <td style="padding:40px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      ${[
                        ["Full Name",    name],
                        ["Email",        `<a href="mailto:${email}" style="color:#00DDEB;">${email}</a>`],
                        ["Company",      company || "<span style='color:#999;'>—</span>"],
                        ["Service",      service  || "<span style='color:#999;'>Not specified</span>"],
                      ]
                        .map(([label, value]) => `
                          <tr>
                            <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
                              <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#999;">${label}</span><br>
                              <span style="font-size:15px;color:#0A1F44;font-weight:500;">${value}</span>
                            </td>
                          </tr>`)
                        .join("")}
                      <tr>
                        <td style="padding:20px 0 0;">
                          <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#999;">Project Details</span>
                          <div style="margin-top:10px;padding:16px;background:#f4f6f9;border-radius:8px;border-left:3px solid #00DDEB;">
                            <p style="margin:0;font-size:15px;color:#0A1F44;line-height:1.7;white-space:pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- CTA -->
                <tr>
                  <td style="padding:0 40px 32px;">
                    <a href="mailto:${email}" style="display:inline-block;background:#00DDEB;color:#0A1F44;font-weight:700;font-size:13px;text-transform:uppercase;letter-spacing:0.1em;padding:12px 28px;border-radius:50px;text-decoration:none;">
                      Reply to ${name}
                    </a>
                  </td>
                </tr>
                <!-- Footer -->
                <tr>
                  <td style="background:#f4f6f9;padding:20px 40px;text-align:center;">
                    <p style="margin:0;font-size:12px;color:#999;">
                      This message was submitted via the contact form on <strong>qordixy.com</strong>
                    </p>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
      text: `
New Project Enquiry — QORDIXY Website

Name:    ${name}
Email:   ${email}
Company: ${company || "—"}
Service: ${service || "Not specified"}

Message:
${message}

---
Submitted via qordixy.com
      `.trim(),
    });

    // Auto-reply to the sender
    await transporter.sendMail({
      from: `"QORDIXY" <${process.env.SMTP_USER}>`,
      to: `"${name}" <${email}>`,
      subject: "We received your message — QORDIXY",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
        <body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f9;padding:40px 20px;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
                <tr>
                  <td style="background:#0A1F44;padding:32px 40px;text-align:center;">
                    <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;">
                      QORDI<span style="color:#00DDEB;">X</span>Y
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding:40px;">
                    <h2 style="margin:0 0 16px;color:#0A1F44;font-size:20px;">Thanks, ${name}!</h2>
                    <p style="margin:0 0 16px;color:#555;font-size:15px;line-height:1.7;">
                      We've received your message and our team will get back to you within <strong>24 hours</strong>.
                    </p>
                    <p style="margin:0 0 24px;color:#555;font-size:15px;line-height:1.7;">
                      In the meantime, feel free to explore more about what we build at
                      <a href="https://qordixy.com" style="color:#00DDEB;">qordixy.com</a>.
                    </p>
                    <div style="padding:16px;background:#f4f6f9;border-radius:8px;border-left:3px solid #00DDEB;">
                      <p style="margin:0;font-size:13px;color:#999;font-style:italic;">Your message: "${message.slice(0, 120).replace(/</g, "&lt;").replace(/>/g, "&gt;")}${message.length > 120 ? "…" : ""}"</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="background:#f4f6f9;padding:20px 40px;text-align:center;">
                    <p style="margin:0;font-size:12px;color:#999;">
                      © ${new Date().getFullYear()} QORDIXY · <a href="mailto:sales@qordixy.com" style="color:#00DDEB;">sales@qordixy.com</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
      text: `Hi ${name},\n\nThanks for reaching out! We've received your message and will get back to you within 24 hours.\n\nBest,\nThe QORDIXY Team\nsales@qordixy.com`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[Contact API] Error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or email us directly at sales@qordixy.com." },
      { status: 500 }
    );
  }
}
