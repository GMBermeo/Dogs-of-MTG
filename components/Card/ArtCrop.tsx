/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";

type ArtCropProps = {
  artCrop?: string;
  large: string;
  id: string;
  name: string;
  artist: string;
  frame: string;
};

export const ArtCrop = ({
  artCrop,
  large,
  id,
  name,
  artist,
  frame,
}: ArtCropProps) => {
  const router = useRouter();

  function enlarge(e: { preventDefault: () => void }) {
    e.preventDefault();
    window.open(large, "_blank");
  }

  function openCard(e: { preventDefault: () => void }) {
    e.preventDefault();
    router.push(`/card/${id}`);
  }

  if (artCrop)
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <div
        className="my-3 w-full cursor-pointer rounded-md bg-cover bg-center print:hidden sm:h-[200px] md:h-[180px] lg:h-[120px]"
        style={{ backgroundImage: "url(" + artCrop + ")" }}
        // src={src}
        // alt={`${name} - ${artist} (${frame})`}
        onClick={openCard}
      ></div>
    );
  else
    return (
      <img
        className="my-1 w-full cursor-pointer rounded-lg px-1 print:block print:w-[220px] print:rounded-none"
        src={large}
        alt={`${name} - ${artist} (${frame})`}
        onClick={enlarge}
      />
    );
};
