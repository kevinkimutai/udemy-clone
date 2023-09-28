"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Category } from "@prisma/client";
import { useEffect, useState } from "react";
import { getCategories } from "@/services/actions/getCategories";

type CategoryProps = {
  onBack: () => void;
  submitForm: (data: any) => void;
  categories?: Category[];
};

const formSchema = z.object({
  category: z.string(),
  // description: z.string().min(60, {
  //   message: "Title must be at least 20 characters.",
  // }),
});

const CategoryForm = ({ submitForm, onBack, categories }: CategoryProps) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
    },
  });

  // ...

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitForm)} className="space-y-8">
        {categories?.map((cat: Category) => (
          <FormField
            key={cat.id}
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Course Title" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        {/* <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Textarea placeholder="Description Of Course" {...field} />
              </FormControl>
              <FormDescription>Detailed Courses Sell More!</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        <Button type="submit">Next</Button>
      </form>
    </Form>
  );
};

export default CategoryForm;
