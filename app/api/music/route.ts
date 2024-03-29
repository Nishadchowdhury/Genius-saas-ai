import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";
import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, apiToken } = body;

    const replicate = new Replicate({
      auth: apiToken,
    });

    if (!userId) {
      return new NextResponse("Unauthorized", {
        status: 401,
        statusText: "Please login first",
      });
    }
    if (!prompt) {
      return new NextResponse("Prompt is required.", {
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

    const response = await replicate.run(
      "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
      {
        input: {
          prompt_a: prompt,
        },
      }
    );

    // if (!isPro) {
    //   await increaseApiLimit();
    // }

    return NextResponse.json(response);
  } catch (error: any) {
    console.log("Music error :->", error.message);
    return new NextResponse("Internal Error", {
      status: 500,
      statusText: error.message,
    });
  }
}
