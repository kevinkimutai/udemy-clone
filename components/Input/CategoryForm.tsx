"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Category, SubCategory } from "@prisma/client";
import { useEffect, useState } from "react";
import { getCategories } from "@/services/actions/getCategories";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { categoryIcons } from "@/constants/constants";
import { Skeleton } from "../ui/skeleton";

type CategoryProps = {
  onBack: () => void;
  submitForm: (data: any) => void;
};

type CategoryWithSubCategories = Category & {
  subCategories: SubCategory[];
};

// const formSchema = z.object({
//   category: z.string(),
//   subcategory: z.string(),
//   // description: z.string().min(60, {
//   //   message: "Title must be at least 20 characters.",
//   // }),
// });

const CategoryForm = ({ submitForm, onBack }: CategoryProps) => {
  const [categories, setCategories] = useState<CategoryWithSubCategories[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [catData, setCatData] = useState<CategoryWithSubCategories>();

  // // 1. Define your form.
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     category: "",
  //     subcategory: "",
  //   },
  // });

  // ...

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      const res = await fetch("/api/category");
      const data = await res.json();

      setCategories(data);
      setIsLoading(false);
    };

    fetchCategories();
  }, []);

  const submitHandler = () => {};

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-3 gap-2">
        {!isLoading ? (
          categories?.map((cat) => {
            const filteredIcons = categoryIcons.find(
              (icon: any) => icon.label.toLowerCase() === cat.name.toLowerCase()
            );

            console.log(filteredIcons);
            const Icon = filteredIcons.icon;

            return (
              <Card
                key={cat.id}
                className={`flex cursor-pointer justify-center items-center transition-all${
                  cat.name === catData?.name ? "border-black" : ""
                }`}
                onClick={() => {
                  setCatData(cat);
                }}
              >
                <CardContent>
                  <div className="flex flex-col justify-center items-center my-auto">
                    <Icon className="text-slate-500 mb-2" />
                    {cat.name}
                  </div>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <Skeleton className="w-[100px] h-[20px] rounded-full" />
        )}
        {!catData ? null : (
          <div className="flex flex-col space-y-1.5 mt-5">
            <Label htmlFor="subcat">Choose Sub-Category</Label>
            <Select>
              <SelectTrigger id="subcat">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                {catData!.subCategories.map((subcat) => (
                  <>
                    <SelectItem value="next" id={subcat.id}>
                      {subcat.title}
                    </SelectItem>
                  </>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
      <div className="flex gap-4 mt-8">
        <Button variant={"outline"} onClick={onBack}>
          Back
        </Button>
        <Button onClick={submitHandler}>Next</Button>
      </div>
    </>
  );
};

export default CategoryForm;
