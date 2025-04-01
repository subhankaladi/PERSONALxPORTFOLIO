import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI with API key from environment
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { message, context } = await req.json();

    // Get the Gemini Pro model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Start a chat conversation
    const result = await model.generateContent([
      // Add context about Subhan
      context,
      // Add the user's message
      message
    ]);

    const response = await result.response;

    return NextResponse.json({
      response: response.text(),
    });

  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Failed to get response from AI', details: error.message },
      { status: 500 }
    );
  }
} 