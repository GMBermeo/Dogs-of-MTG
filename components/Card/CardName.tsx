import { TCard } from "@/types/TCard";
import React from "react";

type CardNameProps = Partial<TCard> & {};

export const CardName = ({ name }: CardNameProps) => {
  // function gatherer(e: { preventDefault: () => void }) {
  //   e.preventDefault();
  //   window.open(link, "_blank");
  // }
  return <h3 className="font-regular cursor-pointer text-2xl">{name}</h3>;
};
