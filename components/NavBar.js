"use client"
import Image from "next/image"
import { Audiowide } from "next/font/google";

const audioWide = Audiowide({
  subsets: ["latin"],
  weight: ["400"],
});

const NavBar = () => {

  const handleNavClick = (event, href) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
      <nav className={`
        fixed top-0 z-50
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

        <ul className="flex gap-8 text-[0.75rem] font-medium text-white/80">
          {[
            { label: "HOME", href: "#home" },
            { label: "TIMELINE", href: "#timeline" },
            { label: "PRIZES", href: "#prizes" },
            { label: "HACKATHONS", href: "#hackathons" },
            { label: "SPONSORS", href: "#sponsors" },
            { label: "ABOUT", href: "#about" },
            { label: "TEAM", href: "#team" },
            { label: "FAQs", href: "#faqs" },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="inline-block cursor-pointer relative px-2 py-1
                           transition-all duration-200 ease-out
                           hover:-translate-y-0.5 hover:scale-110
                           hover:text-[#40ffaa]
                           hover:bg-white/5 hover:rounded-full
                           hover:shadow-[0_0_18px_rgba(64,255,170,0.55)]
                           after:content-['']
                           after:absolute after:left-0 after:-bottom-1 
                           after:h-[2px] after:w-0 
                           after:bg-gradient-to-r after:from-[#40ffaa] after:to-[#4079ff]
                           after:transition-all after:duration-200
                           hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
  )
}

export default NavBar
