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
  name: z.string().min(4, {
    message: "Name must be at least 6 characters.",
  }),
  number: z.string(),
});

const TopicInput = ({ submitForm }: FormProps) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      number: "0",
    },
  });

  // ...

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitForm)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
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
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Topic Number" type={"number"} {...field} />
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

export default TopicInput;
