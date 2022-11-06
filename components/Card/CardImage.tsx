import Image from "next/image";
import React from "react";

type CardImageProps = {
  png: string;
  large: string;
  id: string;
  name: string;
  artist: string;
  frame: string;
  flavor_text: string | null;
  small: string;
};

export const CardImage = ({
  png,
  id,
  name,
  artist,
  frame,
  large,
  flavor_text,
  small,
}: CardImageProps) => {
  // function enlarge(e: { preventDefault: () => void }) {
  //   e.preventDefault();
  //   window.open(large, "_blank");
  // }

  return (
    // <div className="relative h-full w-full">
    <Image
      className="my-2 w-full cursor-pointer rounded-xl px-1 print:block print:w-[220px] print:rounded-none"
      src={png}
      alt={`${name} - ${artist} (${frame}) ${flavor_text ? flavor_text : ""}`}
      blurDataURL={small}
      placeholder="blur"
      width={678}
      height={935}
      unoptimized
      // objectFit="contain"
      // fill={true}
    />
    // </div>
  );
};
