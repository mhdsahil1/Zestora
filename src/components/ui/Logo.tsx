import React from 'react';

interface LogoProps {
  className?: string;
  dotColor?: string;
}

export default function Logo({ className = "text-3xl", dotColor = "#FF3B30" }: LogoProps) {
  return (
    <span className={`font-sans font-bold tracking-tight inline-flex items-baseline ${className}`}>
      Zestora
      <span style={{ color: dotColor }} className="ml-[1px] leading-none text-opacity-100">.</span>
    </span>
  );
}
