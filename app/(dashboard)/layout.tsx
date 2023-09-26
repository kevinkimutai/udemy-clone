import "../globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { UserButton } from "@clerk/nextjs";
import { Logo } from "@/components/Navigation";
import Image from "next/image";
import ImageLogo from "../../public/images/Udemy_logo.svg.png";
import SideBar from "@/components/SideBar/SideBar/SideBar";
import MobileMenu from "@/components/Navigation/MobileMenu/MobileMenu";

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
      <nav className=" fixed w-full md:w-4/5 right-0 top-0 flex justify-between md:justify-end items-center px-8 py-2 shadow-sm">
        <div className="flex justify-center items-center md:hidden">
          <MobileMenu />
          <Image
            src={ImageLogo}
            alt="home"
            className="w-32 px-5 object-contain"
          />
        </div>

        <UserButton />
      </nav>
      <section className="ml-0 md:ml-[20%] w-full md:w-4/5 mt-20 px-4">
        {children}
      </section>
    </body>
  );
}
