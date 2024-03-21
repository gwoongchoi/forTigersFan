import Image from "next/image";
import React from "react";

import logo from "@/assets/images/logo.png";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { HiPencil } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";

type NavItem = {
  label: string;
  link?: string;
  childeren?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem = [
  {
    label: "Features",
    link: "#",
    childeren: [
      { label: "Todo list", link: "", iconImage: "" },
      { label: "", link: "", iconImage: "" },
    ],
  },
];

export default function Navbar() {
  return (
    <div className="border-b border-gray-700">
      <div className="mx-auto flex w-full max-w-screen-2xl justify-between  items-center px-4 py-1 text-sm font-bold ">
        {/* left side */}
        <section className="flex items-center gap-10 ">
          {/* logo */}
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              className="w-64 h-auto hover:opacity-80 transition-all"
            />
          </Link>
          {/* <div className="flex items-center gap-4 transition-all">
            <Link href={"/"} className="relative group px-2 py-3 tanstion-all">
              <p className="flex cursor-pointer items-center gap-2 text-white group-hover:text-">
                <span>Features</span>
                <IoIosArrowDown className="rotate-180 group-hover:rotate-0 transition-all" />
              </p>
              dropdown
              <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                <Link
                  href={"#"}
                  className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                >
                  To do List
                </Link>
              </div>
            </Link>
          </div> */}
        </section>
        {/* search side */}
        <section className="w-1/3 rounded-2xl bg-gray-800 text-white text-base group hover:bg-gray-700 transition-all">
          <form
            action="/search"
            method="get"
            className="flex items-center gap-2 px-3 py-1"
          >
            <label htmlFor="search" className="">
              <IoMdSearch className="size-6" />
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search"
              className="bg-gray-800 focus:outline-none w-full h-9 group-hover:bg-gray-700 transition-all"
            />
          </form>
        </section>
        {/* right side */}
        <section className="flex items-center gap-8 text-white">
          <button className="h-fit transition-all hover:text-gray-500">
            Login
          </button>
          <button className="flex gap-2 items-center  h-fit w-20 rounded-full bg-sky-600 pl-3 pr-4 py-2 transition-all hover:border-black hover:bg-sky-700">
            <HiPencil />
            <p>Post</p>
          </button>
        </section>
      </div>
    </div>
  );
}
