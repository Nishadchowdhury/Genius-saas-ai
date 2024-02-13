import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import {
  ChatCompletionRequestMessage,
  Configuration,
  OpenAIApi,
} from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const instructionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content:
    "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations.",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", {
        status: 401,
        statusText: "Please login first",
      });
    }

    if (!configuration.apiKey) {
      return new NextResponse("Open ai API key not configured.", {
        status: 500,
      });
    }

    if (!messages) {
      return new NextResponse("Messages are required.", {
        status: 500,
      });
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });

    return NextResponse.json(response.data.choices[0].message);
  } catch (error: any) {
    console.log("Code error :->", error.message);
    return new NextResponse("Internal Error", {
      status: 500,
      statusText: error.message,
    });
  }
}