/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

type CardImageProps = {
  normal: string;
  id: string;
  name: string;
  artist: string;
  frame: string;
  flavor_text: string | null;
  small: string;
};

export const CardImage = ({
  id,
  name,
  artist,
  frame,
  normal,
  flavor_text,
  small,
}: CardImageProps) => {
  // function enlarge(e: { preventDefault: () => void }) {
  //   e.preventDefault();
  //   window.open(large, "_blank");
  // }

  return (
    // <div className="relative h-full w-full">
    <img
      className="my-2 w-full cursor-pointer rounded-xl px-1 print:block print:w-[220px] print:rounded-none"
      src={normal}
      alt={`${name} - ${artist} (${frame}) ${flavor_text ? flavor_text : ""}`}
      placeholder="blur"
      width={678}
      height={935}
      // objectFit="contain"
      // fill={true}
    />
    // </div>
  );
};
