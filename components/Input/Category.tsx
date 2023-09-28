import { getCategories } from "@/services/actions/getCategories";
import React from "react";
import CategoryForm from "./CategoryForm";

type CategoryProps = {
  onBack: () => void;
  submitForm: (data: any) => void;
};

const Category = async ({ onBack, submitForm }: CategoryProps) => {
  const categories = await getCategories();

  return (
    <CategoryForm
      onBack={onBack}
      submitForm={submitForm}
      categories={categories}
    />
  );
};

export default Category;
