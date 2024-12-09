import React from "react"
import { IoIosArrowForward } from "react-icons/io";
export default function Hero(){
    return(
        <div className="bg-blue-400   flex justify-left p-20 items-center pf-10">
<div className="max-w-[1440px] flex gap-6 justify-center">
<div className="border-r-2 border-neutral-200 p-10 hidden md:block">
<ul className="space-y-4">
{[
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
].map((item, index) =>(
    <li
    key={index} 
     className="flex justify-between items-center text-slate-800 leading-loose hover:underline cursor-pointer hover-text-blue-500 transition-all duration-150">
<span>{item}</span>
{index < 2 &&(
    <IoIosArrowForward className="text-lg ml-5"/>
)}
    </li>
)) }
</ul>
</div>
</div>
        </div>
    )
}