import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: replace with your preferred email provider (Resend, SendGrid, Nodemailer, etc.)
    // Example with Resend: https://resend.com
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "website@hetaljshahco.com",
    //   to: "info@hetaljshahco.com",
    //   subject: `Website enquiry from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone ?? "—"}\n\n${message}`,
    // });

    console.log("Contact form submission:", { name, email, phone, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
