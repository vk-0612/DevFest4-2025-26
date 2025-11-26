"use client"
import Image from "next/image"
import { Audiowide } from "next/font/google";

const audioWide = Audiowide({
  subsets: ["latin"],
  weight: ["400"],
});

const Footer = () => {
  return (
    <footer className={`
      fixed bottom-0 z-50
      flex w-screen
      justify-center items-center
      px-8 py-6
      backdrop-blur-md
      bg-white/10
      border-t border-white/20
      shadow-lg shadow-black/20
      ${audioWide.className}
    `}>
      <div className="flex items-center gap-4">
        <Image src="/devsoc_logo.svg" width={50} height={25} alt="logo"/>
        <Image src="/devsoc.svg" width={180} height={100} alt="devsoc"/>
        <span className="text-white/80 text-sm md:text-base font-medium">
          made with love by DEVSOC
        </span>
      </div>
    </footer>
  )
}

export default Footer
