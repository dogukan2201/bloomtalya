"use client";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Banner({ title }: { title: string }) {
  return (
    <div className="relative w-full h-[250px] md:h-[300px]">
      <Image
        src="/assets/hero/heroBg.webp"
        fill // Use fill to cover the parent div
        className="absolute inset-0"
        alt="banner"
        priority // Optionally use priority for loading the image
        style={{ objectFit: "cover" }} // Set objectFit using inline styles
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h2 className="text-white text-3xl md:text-5xl font-bold">{title}</h2>
      </div>
    </div>
  );
}
