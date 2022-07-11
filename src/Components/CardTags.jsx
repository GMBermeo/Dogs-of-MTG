import React from "react";
import Tag from './Tag';

const CardTags = ({ full_art, promo, reprint, variation }) => {
  return (
    <div className="inline-flex">
      {full_art && <Tag text="Full Art" />}
      {promo && <Tag text="Promo" />}
      {reprint && <Tag text="Reprint" />}
      {variation && <Tag text="Variation" />}
    </div>
  );
};

export default CardTags;
