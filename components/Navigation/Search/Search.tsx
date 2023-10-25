"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string | undefined>();
  const searchParams = useSearchParams();
  const router = useRouter();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  let currentQuery = {};

  if (searchParams) {
    currentQuery = qs.parse(searchParams.toString());
  }

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(searchTerm);

    const updatedQuery = {
      ...currentQuery,
      search: searchTerm,
    };

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    console.log(url);
    setSearchTerm(undefined);
    router.push(url);
  };

  return (
    <form className="flex items-center" onSubmit={searchHandler}>
      <Input
        type="text"
        placeholder="Search For Any Course"
        className="rounded-2xl min-w-[15rem] sm:min-w-[20rem] xl:min-w-[30rem] bg-purple-100 py-2"
        onChange={changeHandler}
      />
      <button className="rounded-full p-3 -ml-10" type="submit">
        <SearchIcon size={20} className="text-purple-800" />
      </button>
    </form>
  );
};

export default Search;
