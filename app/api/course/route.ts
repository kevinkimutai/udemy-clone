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

    const { title, description, imageUrl, price, categoryId, subcategoryId } =
      await req.json();
    console.log(
      "HAPA",
      title,
      description,
      imageUrl,
      price,
      categoryId,
      subcategoryId,
      userId
    );

    const newCourse = await db.course.create({
      data: {
        title,
        description,
        imageUrl,
        price,
        teacherId: userId!,
        category: {
          connect: {
            id: categoryId,
          },
        },
        subCategory: {
          connect: {
            id: subcategoryId,
          },
        },
      },
    });

    return NextResponse.json(newCourse);
  } catch (error) {
    console.log("[COURSE POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
