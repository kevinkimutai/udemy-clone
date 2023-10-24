import { DollarSign } from "lucide-react";
import Image from "next/image";
import React from "react";

const Course = () => {
  return (
    <div>
      <div className="rounded-lg overflow-hidden">
        <Image
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmwy3xdU4JKn2DmGB3pQ0pMHysjYpUCrH4RA&usqp=CAU"
          }
          width={200}
          height={600}
          alt="course"
          className="object-contain w-full"
        />
      </div>
      <div className="text-slate-700">
        <p>React Masterclass</p>
        <p className="text-sm">By: Kevin Kimutai</p>
        <p className="font-semibold flex items-center text-purple-950 text-md">
          <DollarSign size={20} />
          19.99
        </p>
      </div>
    </div>
  );
};

export default Course;
