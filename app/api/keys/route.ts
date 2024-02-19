import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const bodyTxt = await req.text();
  const body = await req.json();

  const { openAi_key, replicateAi_Token } = body;

  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", {
        status: 401,
        statusText: "Please login first",
      });
    }

    if (!openAi_key && !replicateAi_Token) {
      return new NextResponse("Api_input is required.", {
        status: 500,
      });
    }

    // await prismadb
    

  } catch (error: any) {
    console.log("Api key adding error", error.message);
    return new NextResponse("Api_keys_add_error", { status: 500 });
  }
}
