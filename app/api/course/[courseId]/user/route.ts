import db from "@/lib/db";

import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";

import Stripe from "stripe";
import { stripe } from "../../../../../lib/stripe";

export async function GET(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    //search LoggedInuSer
    const user = await currentUser();
    if (!user) {
      return new NextResponse("Unauthorised", { status: 401 });
    }

    // //Search For Course
    // const course = await db.course.findUnique({
    //   where: { id: params.courseId },
    // });

    //search if course is paid for
    const purchase = await db.purchase.findUnique({
      where: {
        userId_courseId: {
          userId: user.id,
          courseId: params.courseId,
        },
      },
    });

    if (!purchase) {
      return new NextResponse("Unauthorised,Not Paid For Course", {
        status: 401,
      });
    }

    return new NextResponse("OK,Paid For Course", {
      status: 200,
    });
  } catch (error) {
    console.log("[User/Course]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
