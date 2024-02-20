import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";
import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, apiToken } = body;

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
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      {
        input: {
          prompt: "An astronaut riding a horse",
        },
      }
    );

    // if (!isPro) {
    //   await increaseApiLimit();
    // }

    return NextResponse.json(response);
  } catch (error: any) {
    console.log("Video error :->", error.message);
    return new NextResponse("Internal Error", {
      status: 500,
      statusText: error.message,
    });
  }
}
