import db from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    //TODO:ADD ROLE BASED AUTH
    // const { userId } = auth();
    // if (!userId) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }

    const { name, number, videoUrl, attachment, isFree, chapterId } =
      await req.json();

    const topic = await db.topic.create({
      data: {
        name,
        number,
        videoUrl,
        isFree,
        attachment: {
          create: [{ name: attachment.name, url: attachment.url }],
        },
        chapterId,
        chapter: {
          connect: {
            id: chapterId,
          },
        },
      },
    });
    return NextResponse.json(topic);
    // return NextResponse.json(SubCategory);
  } catch (error) {
    console.log("[TOPIC POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
