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

    const { title, categoryId } = await req.json();

    const SubCategory = await db.subCategory.create({
      data: {
        title,
        category: {
          connect: {
            id: categoryId,
          },
        },
      },
    });

    return NextResponse.json(SubCategory);
  } catch (error) {
    console.log("[SUBCATEGORIES POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
