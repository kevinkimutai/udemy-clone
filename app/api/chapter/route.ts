import db from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    //TODO:ADD ROLE BASED AUTH
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized,Please Login", { status: 401 });
    }

    const { courseId, name, number } = await req.json();

    const newChapter = await db.chapter.create({
      data: {
        name,
        number,
        course: {
          connect: {
            id: courseId,
          },
        },
      },
    });

    return NextResponse.json(newChapter);
  } catch (error) {
    console.log("[COURSE POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
