import React from "react";

type CardImageProps = {
  png: string;
  large: string;
  id: string;
  name: string;
  artist: string;
  frame: string;
  flavor_text?: string;
};

export const CardImage = ({
  png,
  id,
  name,
  artist,
  frame,
  large,
  flavor_text,
}: CardImageProps) => {
  function enlarge(e: { preventDefault: () => void }) {
    e.preventDefault();
    window.open(large, "_blank");
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="my-1 w-full cursor-pointer rounded-xl px-1 print:block print:w-[220px] print:rounded-none"
      src={large}
      alt={`${name} - ${artist} (${frame}) ${flavor_text ? flavor_text : ""}`}
      onClick={enlarge}
    />
  );
};
