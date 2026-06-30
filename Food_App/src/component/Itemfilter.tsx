import React from "react";

interface Props {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}
const Itemfilter = ({ categories, selected, onSelect }: Props) => {
  return (
<<<<<<< HEAD
    <div className="flex flex-wrap gap-3 overflow-x-auto ml-4">
=======
    <div className="flex gap-3 overflow-x-auto ml-6 p-2">
>>>>>>> 75bd461 (till cart page)
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-6 py-1 md:py-3 lg:py-3 rounded-full ${
            selected === category
              ? "bg-orange-500 text-white"
              : "bg-white border"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Itemfilter;
