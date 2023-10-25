import db from "@/lib/db";

export async function getSubCategories() {
  try {
    const subcategories = await db.subCategory.findMany();

    return subcategories;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
