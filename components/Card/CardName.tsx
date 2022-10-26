import { TCard } from "@/types/TCard";
import React from "react";

type CardNameProps = Partial<TCard> & {
  link: string;
};

export const CardName = ({ name, link }: CardNameProps) => {
  function gatherer(e: { preventDefault: () => void }) {
    e.preventDefault();
    window.open(link, "_blank");
  }
  return (
    <h3 className="font-regular cursor-pointer text-2xl" onClick={gatherer}>
      {name}
    </h3>
  );
};
