import React from "react";

const ArtCrop = ({ src, large }) => {
  function enlarge(e) {
    e.preventDefault();
    window.open(large, "_blank");
  }

  return (
    <img
      className="my-1 max-h-[100px] cursor-pointer rounded-sm"
      src={src}
      alt={src}
      onClick={enlarge}
    />
  );
};

export default ArtCrop;
