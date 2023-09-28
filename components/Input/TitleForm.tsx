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

type FormProps = {
  submitForm: (data: any) => void;
};

const formSchema = z.object({
  title: z.string().min(4, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(60, {
    message: "Title must be at least 20 characters.",
  }),
});

const TitleForm = ({ submitForm }: FormProps) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  // ...

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitForm)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
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
        <FormField
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
        />

        <Button type="submit">Next</Button>
      </form>
    </Form>
  );
};

export default TitleForm;
