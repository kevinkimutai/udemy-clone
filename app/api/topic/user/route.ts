import db from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    //GEt User

    const user = await currentUser();

    if (!user) {
      return new NextResponse("Unauthenticated,Please Log In", { status: 401 });
    }

    const progress = await db.userProgress.findMany({
      where: { userId: user.id },
      include: { topic: true },
    });

    console.log("PROGRESS", progress[0].topic);

    return NextResponse.json(progress);
  } catch (error) {
    console.log("[USR PROGRESS GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
