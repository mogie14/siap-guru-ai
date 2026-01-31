import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {
  const body = await req.json();

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
  });

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Anda adalah asisten guru profesional Kemenag." },
      { role: "user", content: body.prompt },
    ],
  });

  return NextResponse.json({
    result: completion.choices[0].message.content,
  });
}
