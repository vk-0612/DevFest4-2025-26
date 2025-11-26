"use client"
import Image from "next/image"
import { Audiowide } from "next/font/google";
import Link from "next/link";

const audioWide = Audiowide({
  subsets: ["latin"],
  weight: ["400"],
});

const NavBar = () => {
  return (
      <nav className={`
        fixed top-0
        flex w-screen
        justify-between items-center
        px-8 py-4
        backdrop-blur-md
        bg-white/10
        border-b border-white/20
        shadow-lg shadow-black/20
        ${audioWide.className}
      `}>

        <div className="flex items-center gap-3">
          <Image src="/devsoc_logo.svg" width={40} height={20} alt="logo"/>
          <Image src="/devsoc.svg" width={140} height={80} alt="devsoc"/>
        </div>

        <ul className="flex gap-8 text-[0.75rem] font-medium text-white/90">
          {["HOME","TIMELINE","PRIZES","HACKATHONS","SPONSORS","ABOUT","TEAM","FAQs"]
            .map((item) => (
              <Link
                key={item}
                className="
                  cursor-pointer 
                  hover:text-white 
                  hover:scale-105 
                  transition-all duration-150
                "
                href={`#${item}`}
              >
                {item}
              </Link>
            ))}
        </ul>
      </nav>
  )
}

export default NavBar
