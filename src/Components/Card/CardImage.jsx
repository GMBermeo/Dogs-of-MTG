import React from "react";

const CardImage = ({ src, large }) => {
  function enlarge(e) {
    e.preventDefault();
    window.open(large, "_blank");
  }

  return (
    <img
      className="my-1 w-full cursor-pointer rounded-xl px-1 print:block print:w-[220px] print:rounded-none"
      src={src}
      alt={src}
      onClick={enlarge}
    />
  );
};

export default CardImage;
