import db from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.category.findMany({
      include: {
        subCategories: true,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[CATEGORIES GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    //const { userId } = auth();
    const { name } = await req.json();

    // if (!userId || !isTeacher(userId)) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }

    const course = await db.category.create({
      data: { name },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[CATEGORIES POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
