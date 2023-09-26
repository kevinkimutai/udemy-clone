import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
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
