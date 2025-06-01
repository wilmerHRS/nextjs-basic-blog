import { Tag } from "lucide-react";
import React from "react";

interface Category {
  name: string;
  count: number;
}

const Categories = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Tag className="w-5 h-5" />
        Categorías
      </h3>
      <div className="space-y-3">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center justify-between">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {category.name}
            </a>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {category.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
