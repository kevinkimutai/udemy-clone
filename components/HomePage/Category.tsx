import { getSubCategories } from "@/services/actions/getSubcategories";
import React from "react";
import Categories from "./Categories";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const Category = async () => {
  const subcategories = await getSubCategories();

  return (
    <div className="mb-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" defaultChecked>
          <AccordionTrigger>
            <h1 className="font-semibold mb-1 text-xl text-slate-600 ">
              Categories
            </h1>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 grid-rows-2 gap-3 md:gap-6">
              {subcategories.map((subcat) => (
                <Categories categories={subcat} key={subcat.id} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Category;
