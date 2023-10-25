import db from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    //TODO:ADD ROLE BASED AUTH
    const user = await currentUser();
    if (!user) {
      return new NextResponse("Unauthorized,Please Login", { status: 401 });
    }

    const courses = await db.course.findMany({
      where: {
        teacherId: user.id,
      },
      include: { category: true },
    });

    return NextResponse.json(courses);
  } catch (error) {
    console.log("[COURSES/TEACHER GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
