import db from "@/lib/db";

type IParams = {
  courseId: string;
};

export default async function getCourseById(params: IParams) {
  try {
    const { courseId } = params;

    const course = await db.course.findUnique({
      where: {
        id: courseId,
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
