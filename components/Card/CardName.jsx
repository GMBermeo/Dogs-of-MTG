import React from "react";

const CardName = ({ name, link }) => {
  function gatherer(e) {
    e.preventDefault();
    window.open(link, "_blank");
  }
  return (
    <p className="text-2xl font-regular cursor-pointer" onClick={gatherer}>
      {name}
    </p>
  );
};

export default CardName;
