"use client"
import Image from "next/image";
import { Orbitron } from "next/font/google";
import LetterGlitch from "@/components/LetterGlitch";
import FuzzyText from "@/components/FuzzyText";
import GradientText from "@/components/GradientText";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"]
})
export default function Home() {
  return (
    <div>
      <main className={`h-screen flex justify-center items-center flex-col ${orbitron.className}`}>
        <div className="absolute inset-0 w-screen h-screen -z-10">
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
        </div>

        <div className="flex items-center flex-col select-none">
          <Image src="/devfest.png" width={700} height={100} alt="devfest" />

          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className={`text-[8rem] m-0`}
          >
            5.0
          </GradientText>
        </div>

      </main >
    </div>
  );
}
