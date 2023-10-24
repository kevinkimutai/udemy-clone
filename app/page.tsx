import HomePage from "@/components/HomePage/HomePage";
import Nav from "@/components/Navigation/Nav/Nav";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <Nav />
      <HomePage />
    </>
  );
}
