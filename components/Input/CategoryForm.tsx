"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Category } from "@prisma/client";
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

type CategoryProps = {
  onBack: () => void;
  submitForm: (data: any) => void;
};

const formSchema = z.object({
  category: z.string(),
  // description: z.string().min(60, {
  //   message: "Title must be at least 20 characters.",
  // }),
});

const CategoryForm = ({ submitForm, onBack }: CategoryProps) => {
  const [categories, setCategories] = useState<Category[]>();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
    },
  });

  // ...

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("/api/category");
      const data = await res.json();

      setCategories(data);
    };

    fetchCategories();
  }, []);

  const submitHandler = () => {};

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-3 gap-2">
        {categories?.map((cat) => {
          const filteredIcons = categoryIcons.find(
            (icon: any) => icon.label.toLowerCase() === cat.name.toLowerCase()
          );

          console.log(filteredIcons);
          const Icon = filteredIcons.icon;

          return (
            <Card
              key={cat.id}
              className="flex cursor-pointer justify-center items-center"
            >
              <CardContent>
                <div className="flex flex-col justify-center items-center my-auto">
                  <Icon className="text-slate-500 mb-2" />
                  {cat.name}
                </div>
              </CardContent>
            </Card>
          );
        })}

        <div className="flex flex-col space-y-1.5 mt-5">
          <Label htmlFor="framework">Choose Sub-Category</Label>
          <Select>
            <SelectTrigger id="framework">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="next">Next.js</SelectItem>
              <SelectItem value="sveltekit">SvelteKit</SelectItem>
              <SelectItem value="astro">Astro</SelectItem>
              <SelectItem value="nuxt">Nuxt.js</SelectItem>
            </SelectContent>
          </Select>
        </div>
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
