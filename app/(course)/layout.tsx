import "../globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { UserButton } from "@clerk/nextjs";
import { Logo } from "@/components/Navigation";
import Image from "next/image";
import ImageLogo from "../../public/images/Udemy_logo.svg.png";
import SideBar from "@/components/SideBar/SideBar/SideBar";
import MobileMenu from "@/components/Navigation/MobileMenu/MobileMenu";
import CourseNavigation from "@/components/CourseNavigation/CourseNavigation";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  //TODO: ADD COURSE NAME
  title: "Course",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="">
      <CourseNavigation />
      {children}
    </body>
  );
}
