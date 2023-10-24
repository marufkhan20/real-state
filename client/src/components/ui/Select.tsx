"use client";
import { cn } from "@/lib/utills";
import { FC, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

interface IProps {
  title: string;
  options: string[];
  className?: string;
}

const Select: FC<IProps> = ({ title, options, className }) => {
  const [openOpt, setOpenOpt] = useState(false);
  const [selected, setSelected] = useState(title);

  return (
    <div className={cn("w-[250px] relative", className)}>
      <div
        className="border py-4 flex items-center justify-between gap-5 cursor-pointer"
        onClick={() => setOpenOpt(!openOpt)}
      >
        <h3 className="ml-4 text-base font-medium">{selected}</h3>
        <IoIosArrowUp
          className={`mr-2 transition-all text-xs ${
            openOpt ? "" : "rotate-180"
          }`}
        />
      </div>
      <div
        className={`transition-all duration-200 absolute top-[100%] left-0 right-0 bg-white z-50 ${
          openOpt ? "scale-100" : "scale-0"
        } border rounded mt-1`}
      >
        <li
          className={`${
            selected === title && "font-semibold text-secondary bg-[#f6f6f6]"
          } text-base px-4 py-3 cursor-pointer transition-all hover:bg-[#F6F6F6] list`}
          onClick={() => {
            setSelected(title);
            setOpenOpt(false);
          }}
        >
          {title}
        </li>

        {options?.map((option) => (
          <li
            key={option}
            className={`${
              selected === option && "font-semibold text-secondary bg-[#f6f6f6]"
            } text-base px-4 py-3 cursor-pointer transition-all hover:bg-[#F6F6F6] list`}
            onClick={() => {
              setSelected(option);
              setOpenOpt(false);
            }}
          >
            {option}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Select;
