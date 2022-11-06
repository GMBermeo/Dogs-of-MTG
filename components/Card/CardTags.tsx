import { TCard } from "@/types/TCard";
import React from "react";
import Tag from "./Tag";

type CardTagsProps = Partial<TCard> & {};

export const CardTags = ({
  full_art,
  promo,
  reprint,
  variation,
}: CardTagsProps) => {
  if (!full_art && !promo && !reprint && !variation)
    return (
      <>
        {/* <div className="my-auto mt-auto max-h-4 text-sm font-medium">
          {frame}
        </div> */}
      </>
    );

  return (
    <div className="flex justify-center gap-x-3">
      {full_art && <Tag text="Full Art" />}
      {promo && <Tag text="Promo" />}
      {reprint && <Tag text="Reprint" />}
      {variation && <Tag text="Variation" />}
    </div>
  );
};
