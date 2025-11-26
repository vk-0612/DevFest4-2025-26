/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useState } from "react";

const CursorAura = () => {
  const [auraState, setAuraState] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      currentPos.current = {
        x: lerp(currentPos.current.x, targetPos.current.x, 0.18),
        y: lerp(currentPos.current.y, targetPos.current.y, 0.18),
      };

      setAuraState((prev) => ({
        ...prev,
        x: currentPos.current.x,
        y: currentPos.current.y,
      }));

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    const handlePointerMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      targetPos.current = { x, y };
      if (!auraState.visible) {
        setAuraState((prev) => ({ ...prev, visible: true }));
      }
    };

    const handlePointerLeave = () => {
      setAuraState((prev) => ({ ...prev, visible: false }));
    };

    const handleTouchMove = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      const touch = e.touches[0];
      const x = touch.clientX;
      const y = touch.clientY;

      targetPos.current = { x, y };
      if (!auraState.visible) {
        setAuraState((prev) => ({ ...prev, visible: true }));
      }
    };

    const handleTouchEnd = () => {
      setAuraState((prev) => ({ ...prev, visible: false }));
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const size = 260;
  const halfSize = size / 2;

  return (
    <div
      className={`pointer-events-none fixed inset-0 -z-10 transition-opacity duration-300 ${
        auraState.visible ? "opacity-80" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      <div
        className="absolute mix-blend-screen blur-3xl"
        style={{
          width: size,
          height: size,
          left: auraState.x - halfSize,
          top: auraState.y - halfSize,
          background:
            "radial-gradient(circle at center, rgba(255,232,120,0.9), rgba(255,232,120,0) 70%)",
          transform: "translate3d(0,0,0)",
        }}
      />
    </div>
  );
};

export default CursorAura;


