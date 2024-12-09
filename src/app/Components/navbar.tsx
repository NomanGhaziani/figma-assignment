import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartSharp } from "react-icons/io5";
export default function Navbar(){
    return(
        <header className="bg-white max-sm-640 shadow-sm border-b max-auto flex flex-col">
<div className="bg-blue-950 text-white py-2 text-sm flex justify-between items-center px-8 w-full">
    <div className="text-center flex-1">
     (225) 555-0118
    michelle.rivera@example.com
    Follow Us  and get a chance to win 80% off
     <a href="#" className="underline hover-text-slate-300">
        {" "}
        ShopNow{" "}
        </a>
     </div>
     <div className="flex items-center gap-[2px]">
        <div className="text-white text-sm font-normal leading-[21px]">
            Follow Us :
            </div>
            <a href="#" className="mx-2 text-white-500 "><img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram" width="24" height="24" /></a>
            <a href="#" className="mx-2 text-white-500 "><img src="https://img.icons8.com/ios-filled/50/000000/facebook.png" alt="Facebook" width="24" height="24" /></a>
            <a href="#" className="mx-2 text-white-500 "><img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="Twitter" width="24" height="24" /></a>
            <MdArrowDropDown className="text-white text-3xl"/>
        </div>
</div>
{/*main navbar */}
<div className="flex justify-between items-center px-8 py-4">
<h1 className="text-2xl font-bold text-black px-16">Bandage</h1>
<nav className="hidden md:flex space-x-8 items-center">
<a href="#" className="text-slate-600 hover:text-black underline">Home</a>
<a href="#" className="text-slate-600 hover:text-black ">Shop</a>
<a href="#" className="text-slate-600 hover:text-black ">About</a>
<a href="#" className="text-slate-600 hover:text-black ">Blog</a>
<a href="#" className="text-slate-600 hover:text-black ">Contact</a>
<a href="#" className="text-slate-600 hover:text-black ">Pages</a>
</nav>
{/*search icon */}
<div className="flex items-center space-x-6">
<div className="hidden lg:flex items-center bg-slate-200 rounded-md px-3 py-2">
    <input type="text"
    placeholder="What are you looking for?" className="bg-slate-100 outline-none text-sm"></input>
    <CiSearch />
    </div>
    <CiHeart />
    <IoCartSharp />
    </div>
</div>
        </header>
        
    )
}