"use client";
import { useState, useEffect, useRef } from "react";

export function useMagnetic<T extends HTMLElement>(range = 80) {
  const ref = useRef<T>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const { clientX, clientY } = e;
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = left + width / 2;
      const middleY = top + height / 2;

      const distanceX = clientX - middleX;
      const distanceY = clientY - middleY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < range) {
        // Move towards the cursor
        setPosition({ x: distanceX * 0.3, y: distanceY * 0.3 });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [range]);

  return { ref, position };
}
