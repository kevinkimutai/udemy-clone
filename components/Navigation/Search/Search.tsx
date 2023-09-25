import React from "react";
import { Input } from "@/components/ui/input";

const Search = () => {
  return (
    <div>
      <Input
        type="text"
        placeholder="Search For Any Course"
        className="rounded-2xl min-w-[15rem] sm:min-w-[20rem] xl:min-w-[30rem] bg-purple-100 py-2"
      />
    </div>
  );
};

export default Search;
