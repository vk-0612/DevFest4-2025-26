"use client";

import { useEffect, useRef, useState } from "react";
import FuzzyText from "@/components/FuzzyText";
import GradientText from "@/components/GradientText";

const LETTERS = "DevFest".split("");

export default function HeroInteractive() {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [velocity, setVelocity] = useState(0);
  const lastPos = useRef({ x: 0, y: 0 });
  const lastTime = useRef(performance.now());

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      const normX = (x - cx) / cx;
      const normY = (y - cy) / cy;

      const maxTilt = 8;
      setTilt({
        rotateX: -normY * maxTilt,
        rotateY: normX * maxTilt,
      });

      const now = performance.now();
      const dt = (now - lastTime.current) || 1;
      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy) / dt;

      setVelocity((prev) => {
        const v = prev * 0.85 + speed * 0.6;
        return Math.min(v, 1.4);
      });

      lastPos.current = { x, y };
      lastTime.current = now;
    };

    const handleLeave = () => {
      setTilt({ rotateX: 0, rotateY: 0 });
    };

    el.addEventListener("pointermove", handleMove);
    el.addEventListener("pointerleave", handleLeave);

    return () => {
      el.removeEventListener("pointermove", handleMove);
      el.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  const baseIntensity = 0.18 + velocity * 0.12;
  const hoverIntensity = 0.4 + velocity * 0.3;
  const gradientSpeed = 3 + velocity * 4;

  return (
    <div
      ref={containerRef}
      className="relative flex items-center flex-col z-10 will-change-transform"
      style={{
        transform: `perspective(1200px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: "transform 0.12s ease-out",
      }}
    >
      <div className="flex gap-2 md:gap-4">
        {LETTERS.map((ch, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-150 ease-out"
            style={{
              transform: `translate3d(0, ${Math.sin(i + velocity * 12) * 3}px, 0)`,
            }}
          >
            <FuzzyText
              baseIntensity={baseIntensity}
              hoverIntensity={hoverIntensity}
              className="text-[4rem] md:text-[9rem] font-bold"
            >
              {ch}
            </FuzzyText>
          </span>
        ))}
      </div>

      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={gradientSpeed}
        showBorder={false}
        className="text-[3rem] md:text-[8rem] m-0 select-none"
      >
        5.0
      </GradientText>
    </div>
  );
}



