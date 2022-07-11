import React from "react";

const CardImage = ({ src, large }) => {
  function enlarge(e) {
    e.preventDefault();
    window.open(large, "_blank");
  }

  return (
    <img
      className="float-left mr-4 mb-1 max-h-[160px] cursor-pointer rounded-md md:mb-4 md:max-h-[200px]"
      src={src}
      alt={src}
      onClick={enlarge}
    />
  );
};

export default CardImage;
