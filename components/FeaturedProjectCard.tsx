"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Props = {
  children: React.ReactNode;
  delay?: number;  // ms
  className?: string;
  direction?: "up" | "left" | "none";
};

export default function FadeIn({ children, delay = 0, className = "", direction = "up" }: Props) {
  const { ref, visible } = useScrollAnimation();

  const translateMap = {
    up:   "translateY(24px)",
    left: "translateX(-16px)",
    none: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : translateMap[direction],
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}