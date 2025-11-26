"use client";

import Image from "next/image";
import { Orbitron } from "next/font/google";
import LetterGlitch from "@/components/LetterGlitch";
import FuzzyText from "@/components/FuzzyText";
import GradientText from "@/components/GradientText";
import CursorAura from "@/components/CursorAura";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export default function Home() {
  return (
    <main className={`${orbitron.className}`}>
    <div
      id="home"
      className="relative h-screen flex justify-center items-center flex-col overflow-hidden"
    >
      {/* Glitchy background */}
      <div className="absolute inset-0 w-screen h-screen -z-20">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      {/* Cursor/touch aura */}
      <CursorAura />

      {/* Main hero text (simple) */}
      <div className="flex items-center flex-col z-10">
        <div
          className="cursor-pointer transition-all duration-200
                     hover:scale-110 hover:-translate-y-1
                     hover:drop-shadow-[0_0_35px_rgba(255,232,120,0.9)]"
        >
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={0.3}
            className={`text-[9rem] font-bold`}
          >
            DevFest
          </FuzzyText>
        </div>

        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className={`text-[8rem] m-0 select-none`}
        >
          5.0
        </GradientText>
      </div>
    </div>

    {/* Timeline section */}
    <section id="timeline" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Glitchy background */}
      <div className="absolute inset-0 w-screen h-screen -z-20">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      {/* Cursor/touch aura */}
      <CursorAura />

      {/* Timeline text styled like home page */}
      <div className="flex items-center flex-col z-10">
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={0.3}
          className={`text-[9rem] font-bold`}
        >
          14 Jan
        </FuzzyText>

        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className={`text-[8rem] m-0 select-none`}
        >
          2026
        </GradientText>
      </div>
    </section>
    <section id="prizes" className="h-screen flex items-center justify-center">
      <p className="text-white/60 text-xl">Prizes section coming soon.</p>
    </section>
    <section id="hackathons" className="h-screen flex items-center justify-center">
      <p className="text-white/60 text-xl">Hackathons section coming soon.</p>
    </section>
    <section id="sponsors" className="h-screen flex items-center justify-center">
      <p className="text-white/60 text-xl">Sponsors section coming soon.</p>
    </section>
    {/* About section */}
    <section id="about" className="relative h-screen flex items-center justify-center overflow-hidden px-8">
      {/* Glitchy background */}
      <div className="absolute inset-0 w-screen h-screen -z-20">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      {/* Cursor/touch aura */}
      <CursorAura />

      {/* About text in container */}
      <div className="max-w-4xl mx-auto z-10 px-4">
        <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl">
          <p className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed text-center">
            DevFest is the flagship technical event of Developers' Society featuring a diverse array of events — hackathon, gamejam, workshop, codegolf and guest speaker. This unites over 3000 students from all around the country, converging both in-person at the BITS Pilani - Goa campus and through nationwide virtual participation. Come, be a part of this unique blend of learning and celebration!
          </p>
        </div>
      </div>
    </section>
    <section id="team" className="h-screen flex items-center justify-center">
      <p className="text-white/60 text-xl">Team section coming soon.</p>
    </section>
    <section id="faqs" className="h-screen flex items-center justify-center mb-32">
      <p className="text-white/60 text-xl">FAQs section coming soon.</p>
    </section>
    </main>
  );
}


