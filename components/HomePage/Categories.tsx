"use client";

import { SubCategory } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

import qs from "query-string";

type ComponentProps = {
  categories: SubCategory;
};

const Categories = ({ categories }: ComponentProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedCategory = searchParams?.get("subCategory");

  let currentQuery = {};

  if (searchParams) {
    currentQuery = qs.parse(searchParams.toString());
  }

  const queryHandler = (subcat: string) => {
    const updatedQuery = {
      ...currentQuery,
      subCategoryId: subcat,
    };

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  };
  return (
    <div
      className={` rounded-md flex justify-center items-center p-4 h-20 cursor-pointer ${
        selectedCategory === categories.id
          ? "border-purple-800 border-2"
          : "border border-purple-500"
      }`}
      onClick={() => queryHandler(categories.id)}
    >
      <p className="font-semibold">{categories.title}</p>
    </div>
  );
};

export default Categories;
