import React from "react";

interface Props {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}
const Itemfilter = ({ categories, selected, onSelect }: Props) => {
  return (
    <div className="flex gap-3 overflow-x-auto ml-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-6 py-2 rounded-full ${
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
