import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages, apiKey } = body;

    const configuration = new Configuration({
      apiKey,
    });

    const openai = new OpenAIApi(configuration);

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

    // const freeTrial = await checkApiLimit();
    // const isPro = await checkSubscription();

    // if (!freeTrial && !isPro) {
    //   return new NextResponse("Free trial has expired.", {
    //     status: 403,
    //   });
    // }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    // if (!isPro) {
    //   await increaseApiLimit();
    // }

    return NextResponse.json(response.data.choices[0].message);
  } catch (error: any) {
    console.log("Conversation error :->", error.message);
    return new NextResponse("Internal Error", {
      status: 500,
      statusText: error.message,
    });
  }
}
