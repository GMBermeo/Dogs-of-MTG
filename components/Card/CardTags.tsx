import { TCard } from "@/types/TCard";
import React from "react";
import Tag from "./Tag";

type CardTagsProps = Partial<TCard> & {};

export const CardTags = ({
  full_art,
  promo,
  reprint,
  variation,
  frame,
}: CardTagsProps) => {
  if (!full_art && !promo && !reprint && !variation)
    return (
      <>
        <div className="my-auto max-h-4 text-sm font-medium">{frame}</div>
      </>
    );

  return (
    <>
      {full_art && <Tag text="Full Art" />}
      {promo && <Tag text="Promo" />}
      {reprint && <Tag text="Reprint" />}
      {variation && <Tag text="Variation" />}
    </>
  );
};
