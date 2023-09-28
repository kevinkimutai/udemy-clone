import db from "@/lib/db";

export async function getCategories() {
  try {
    const categories = await db.category.findMany();

    return categories;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
