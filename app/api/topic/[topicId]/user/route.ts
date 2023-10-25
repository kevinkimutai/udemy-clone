import db from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { topicId: string } }
) {
  try {
    const topic = await db.topic.findUnique({
      where: { id: params.topicId },
    });

    //Get User
    const user = await currentUser();

    if (!user) {
      return new NextResponse("Unauthenticated,Please Log In", { status: 401 });
    }

    //check user progress exists
    const userProgress = await db.userProgress.findUnique({
      where: { userId: user.id },
      include: { topic: true },
    });

    if (userProgress) {
      if (userProgress.topic.find((top) => top.id === topic!.id)) {
        return new NextResponse("Already Watched", { status: 200 });
      }

      const updatedUserProgress = await db.userProgress.update({
        where: { userId: user.id },
        data: {
          topic: {
            connect: { id: topic!.id },
          },
        },
      });

      return NextResponse.json(updatedUserProgress);
    }

    const createUserProgress = await db.userProgress.create({
      data: {
        userId: user.id,
        topic: { connect: { id: topic!.id } },
      },
    });

    return NextResponse.json(createUserProgress);
  } catch (error) {
    console.log("[TOPICUSERPROGRESS GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
