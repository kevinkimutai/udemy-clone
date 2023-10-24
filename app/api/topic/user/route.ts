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
      include: { topicsCovered: true },
    });

    console.log("PROGRESS", progress);

    return NextResponse.json(progress);
  } catch (error) {
    console.log("[USR PROGRESS GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

// export async function GET(
//   req: Request,
//   { params }: { params: { topicId: string } }
// ) {
//   try {
//     const topic = await db.topic.findUnique({
//       where: { id: params.topicId },
//     });

//     //GEt User

//     const user = await currentUser();

//     if (!user) {
//       return new NextResponse("Unauthenticated,Please Log In", {
//         status: 401,
//       });
//     }

//     //check user progress exists
//     const userProgress = await db.userProgress.findMany({
//       where: { userId: user.id },
//       include: { topicsCovered: true },
//     });

//     return NextResponse.json(userProgress);
//   } catch (error) {
//     console.log("[TOPICUSERPROGRESS GET]", error);
//     return new NextResponse("Internal Error", { status: 500 });
//   }
// }
