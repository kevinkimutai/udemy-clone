import db from "@/lib/db";

type IParams = {
  courseId: string;
};

export default async function getCourseById(params: IParams) {
  console.log("PARAMS", params);
  try {
    const { courseId } = params;

    const course = await db.course.findUnique({
      where: {
        id: courseId,
      },
      include: {
        category: true,
        subCategory: true,
      },
    });

    if (!course) {
      return null;
    }

    return {
      course,
    };
  } catch (error: any) {
    throw new Error(error);
  }
}