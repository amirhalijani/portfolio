"use client";
import Link from "next/link"
import { useState } from "react"
import NavLinks from "./NavLinks"
import { NavLinksTag } from "@/static/NavLinksTag";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false)
  return (
    <div className={`${toggleNav && "h-screen"} overflow-y-hidden bg-white z-[100] top-0 sticky`}>
    <div className="sticky top-0 flex items-center justify-between px-4 py-3 lg:px-6 lg:py-5 border-b-2 bg-white backdrop-blur-lg">
      <div className="flex items-center gap-x-12">
        <Link href="/" className="md:text-[1.3rem] font-semibold">amiralijani</Link>
        <NavLinks />
      </div>
      <Link href="#" className="hidden lg:block text-white bg-black rounded-md px-3 py-2 text-[0.8rem]">Contact Me</Link>
      <div className="flex flex-col items-center justify-center gap-y-1 lg:hidden" onClick={() => { setToggleNav(prevstate => !prevstate) }}>
        <div className="w-6 h-[2px] bg-black rounded-full" />
        <div className="w-6 h-[2px] bg-black rounded-full" />
        <div className="w-6 h-[2px] bg-black rounded-full" />
      </div>
    </div>
    <div className={`${toggleNav ? "flex" : "hidden"} flex-col lg:hidden w-full h-screen z-[100] sticky top-0 px-4 py-12 gap-y-6`}>
      {
        NavLinksTag.map((item) => <Link onClick={() => setToggleNav(false)} className="text-gray-500 font-['Poppins-Light'] hover:text-black text-[1.2rem]" href={item.href}>{item.title}</Link>)
      }
    </div>
    </div>
  )
}

export default Navbar