"use client"
import Image from "next/image"

const NavBar = () => {
  return (
      <div className="flex p-7 justify-between items-center w-full z-10 fixed top-0 backdrop-blur-md bg-black/30">
        <div className="flex gap-2 items-center">
          <Image src="/devsoc_logo.svg" width={50} height={20} />
          <Image src="/devsoc.svg" width={175} height={80} alt="devsoc" />
        </div>
        <div>
          <ul className="flex gap-10 text-md">
            <li>HOME</li>
            <li>TIMELINE</li>
            <li>PRIZES</li>
            <li>HACKATHONS</li>
            <li>SPONSORS</li>
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
  )
}

export default NavBar
