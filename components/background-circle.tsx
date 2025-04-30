"use client";

import { useEffect, useState } from "react";

export default function BackgroundCircle() {
  const [colorIndex, setColorIndex] = useState(0);

  const colors = [
    "bg-pink-400",
    "bg-purple-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-400",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 flex items-center justify-center overflow-hidden">
      <div
        className={`rounded-full w-[600px] h-[600px] transition-colors duration-1000 blur-xl opacity-50 ${colors[colorIndex]}`}
      />
    </div>
  );
}
