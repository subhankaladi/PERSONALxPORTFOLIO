import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await client.create({
      _type: 'contactMessage',
      name: body.name,
      email: body.email,
      message: body.message,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ message: 'Message sent successfully', result });
  } catch (error) {
    console.error('Error saving contact message:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 