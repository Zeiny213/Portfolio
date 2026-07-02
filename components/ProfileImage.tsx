"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/data/profile";

export function ProfileImage() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex aspect-[4/5] w-full items-center justify-center rounded-[2rem] bg-gradient-to-br from-sky-400/25 to-emerald-300/20 text-center text-5xl font-bold text-white">
        ZT
      </div>
    );
  }

  return (
    <Image
      src={profile.imagePath}
      alt="Professional portrait of Ziad Tamer El-Zeiny"
      width={900}
      height={1125}
      priority
      sizes="(max-width: 768px) 88vw, (max-width: 1200px) 40vw, 420px"
      onError={() => setHasError(true)}
      className="aspect-[4/5] w-full rounded-[2rem] object-cover object-[50%_34%] shadow-2xl ring-1 ring-white/15"
    />
  );
}