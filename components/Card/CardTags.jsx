import React from "react";
import Tag from "./Tag";

const CardTags = ({ full_art, promo, reprint, variation, prints, frame }) => {
  if (!full_art && !promo && !reprint && !variation)
    return (
      <>
        <div className="text-sm font-medium">{frame}</div>
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

export default CardTags;
