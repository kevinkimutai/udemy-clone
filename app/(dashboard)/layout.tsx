import "../globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { UserButton } from "@clerk/nextjs";
import { Logo } from "@/components/Navigation";
import Image from "next/image";
import ImageLogo from "../../public/images/Udemy_logo.svg.png";
import SideBar from "@/components/SideBar/SideBar";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="w-full flex justify-start items-start">
      <SideBar />
      <nav className=" fixed w-4/5 right-0 top-0 flex justify-end px-8 py-2 shadow-sm">
        <UserButton />
      </nav>
      <section className="ml-[20%] w-full mt-20">{children}</section>
    </body>
  );
}
