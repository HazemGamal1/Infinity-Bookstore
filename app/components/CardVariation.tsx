"use client";
import Image from "next/image";
import menewood from "@/app/menewood.webp";
import { StaticImageData } from "next/image";
import Verity from "@/app/verity.jpg";
import { useState } from "react";
import king from "@/public/bookCovers/king.webp";

const Card = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <div
        className="grid place-content-center relative rounded-lg cursor-pointer overflow-hidden "
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
      >
        <Image
          src={king}
          alt="book cover"
          width={338}
          height={260}
          layout="fit"
        />
        <p className="absolute top-1 left-0.5 bg-main-color my-4 mx-6 sm:mx-4 font-bold rounded-md text-sm max-w-max py-1 px-2">
          Novel
        </p>
      </div>
    </div>
  );
};

export default Card;
