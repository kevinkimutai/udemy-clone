import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menu,
  UserSquare2,
  BookOpenCheck,
  Heart,
  ShoppingCart,
  LogOut,
  Key,
} from "lucide-react";
import MobileRoutes from "../MobileNavRoutes/MobileRoutes";

const MobileMenu = () => {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <MobileRoutes />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
