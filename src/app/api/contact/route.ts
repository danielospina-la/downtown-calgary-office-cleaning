import { NextRequest, NextResponse } from "next/server";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const message = (body.message ?? "").trim();
  const botcheck = body.botcheck;

  // Honeypot: silently accept spam bots
  if (botcheck) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ success: false }, { status: 500 });
  }

  const html = `
    <h2>New quote request — dcoc.ca</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "D.C.O.C. Website <info@dcoc.ca>",
      to: ["info@dcoc.ca"],
      reply_to: email,
      subject: `New quote request from ${name}`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("Resend error:", await res.text());
    return NextResponse.json({ success: false }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
