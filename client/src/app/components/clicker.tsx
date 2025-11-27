"use client";
import Image from "next/image";
import { useState } from "react";

export default function Clicker() {
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  let clicks = 0;

  function handleClick() {
    clicks++;
    setScore((prev) => prev + 1);
    setClicked(true);
    setTimeout(() => setClicked(false), 150);
  }
  return (
    <main className="items-center justify-center p-10 flex flex-col w-full gap-8 bg-[#0f0f0f]">
      <div className="bg-light-yellow"></div>
      <h1 className="text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
        Click the duck'y 😎!
      </h1>
      <Image
        className={`cursor-pointer bg transparent ${clicked ? "pop" : ""}`}
        onClick={handleClick}
        src="/duck.png"
        alt="Duck Image"
        width={330}
        height={330}
        style={{ zIndex: 20 }}
      />
      <h2 className="text-3xl drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
        Score: {score}
      </h2>
    </main>
  );
}
