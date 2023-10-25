import db from "@/lib/db";

export interface IListingsParams {
  search?: string;
  subCategoryId?: string;
}

export async function getCourses(params: IListingsParams) {
  try {
    const { search, subCategoryId } = params;

    let query: any = {};

    if (search) {
      query.title = search;
    }

    if (subCategoryId) {
      query.subCategoryId = subCategoryId;
    }

    const courses = await db.course.findMany({
      where: {
        isPublished: false,
        title: {
          contains: query.title,
        },
        subCategoryId: query.subCategoryId,
      },
      include: {
        category: true,
        chapters: {},
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return courses;
  } catch (error: any) {
    throw new Error(error);
  }
}
