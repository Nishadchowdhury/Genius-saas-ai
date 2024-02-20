import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const {
      prompt,
      amount = 1,
      resolution = "512x512",
      apiKey,
    } = body;

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

    if (!prompt) {
      return new NextResponse("Prompt is required.", {
        status: 500,
      });
    }

    if (!amount) {
      return new NextResponse("Amount is required.", {
        status: 500,
      });
    }

    if (!resolution) {
      return new NextResponse("Resolution are required.", {
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

    // if (!freeTrial) {
    //   return new NextResponse("Free trial has expired.", {
    //     status: 403,
    //   });
    // }

    const response = await openai.createImage({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    // if (!isPro) {
    //   await increaseApiLimit();
    // }

    return NextResponse.json(response.data.data);
  } catch (error: any) {
    console.log("Image error :->", error.message);
    return new NextResponse("Internal Error", {
      status: 500,
      statusText: error.message,
    });
  }
}
