import React from "react";

const ArtCrop = ({ src, large }) => {
  function enlarge(e) {
    e.preventDefault();
    window.open(large, "_blank");
  }

  return (
    <div
      className="my-3 w-full cursor-pointer rounded-md bg-cover bg-center print:hidden sm:h-[200px] md:h-[180px] lg:h-[120px]"
      style={{ backgroundImage: "url(" + src + ")" }}
      // src={src}
      // alt={src}
      onClick={enlarge}
    ></div>
  );
};

export default ArtCrop;
