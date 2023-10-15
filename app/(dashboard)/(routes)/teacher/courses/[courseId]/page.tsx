import React from "react";

type ParamsPage = {
  courseId: string;
};

const page = ({ params }: { params: ParamsPage }) => {
  return <div>WE ARE AT {params.courseId}</div>;
};

export default page;
