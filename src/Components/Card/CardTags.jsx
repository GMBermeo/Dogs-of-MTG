import React from "react";
import Tag from "./Tag";

const CardTags = ({ full_art, promo, reprint, variation, prints }) => {
  if (prints === 1 && !full_art && !promo && !reprint && !variation)
    return null;

  return (
    <div className="inline-flex">
      {prints > 1 && <Tag text="has others prints" />}
      {full_art && <Tag text="Full Art" />}
      {promo && <Tag text="Promo" />}
      {reprint && <Tag text="Reprint" />}
      {variation && <Tag text="Variation" />}
    </div>
  );
};

export default CardTags;
