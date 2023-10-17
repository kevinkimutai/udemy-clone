"use client";

import React from "react";
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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  isFree: z.string(),
});

type ComponentProps = {
  submitForm: (data: any) => void;
};

const TopicFreeForm = ({ submitForm }: ComponentProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isFree: "false",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitForm)} className="space-y-8">
        <FormField
          control={form.control}
          name="isFree"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              {/* //@ts-ignore */}
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Is the topic Free?" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={"true"}>true</SelectItem>
                  <SelectItem value={"false"}>false</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Next</Button>
      </form>
    </Form>
  );
};

export default TopicFreeForm;
