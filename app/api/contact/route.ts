import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Save to Sanity CMS
    const result = await client.create({
      _type: 'contactMessage',
      name: name,
      email: email,
      message: message,
      createdAt: new Date().toISOString(),
    });

    // Send email notification using Resend
    const emailData = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['subhankaladi@gmail.com'],
      subject: `New Contact Form Message from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #6366f1;">New Contact Form Message</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong><br>${message}</p>
          </div>
        </div>
      `
    });

    return NextResponse.json({ 
      message: 'Message sent successfully', 
      result,
      emailData
    });
  } catch (error) {
    console.error('Error processing contact message:', error);
    return NextResponse.json(
      { error: 'Failed to send message', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 