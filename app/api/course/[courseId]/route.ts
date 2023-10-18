import db from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
      },
      include: {
        category: true,
        subCategory: true,
        chapters: {
          include: {
            topic: true,
          },
        },
      },
    });

    console.log(course);
    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSE POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
