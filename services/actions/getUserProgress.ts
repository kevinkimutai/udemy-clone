import db from "@/lib/db";
import { currentUser } from "@clerk/nextjs";

export async function getUserProgress() {
  try {
    const user = await currentUser();

    if (!user) {
      return;
    }

    const progress = await db.userProgress.findMany({
      where: { userId: user!.id },
      include: { topicsCovered: true },
    });

    return progress;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
