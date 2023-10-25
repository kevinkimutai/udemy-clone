import HomePage from "@/components/HomePage/HomePage";
import Nav from "@/components/Navigation/Nav/Nav";
import { getCourses } from "@/services/actions/getCourses";
import { UserButton } from "@clerk/nextjs";
import { Course } from "@prisma/client";

interface IListingsParams {
  search?: string;
  subCategoryId?: string;
}
type PageProps = {
  params: {};
  searchParams: IListingsParams;
};

export default async function Home(props: PageProps) {
  const searchParams = props.searchParams;

  const courses: Course[] = await getCourses(searchParams);

  return (
    <>
      <Nav />
      <HomePage courses={courses} />
    </>
  );
}
