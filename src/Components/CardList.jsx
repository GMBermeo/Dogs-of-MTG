import React from "react";
import { GlobalContext } from "../GlobalContext";

import Card from "./Card";

const Cards = () => {
  const { dados } = React.useContext(GlobalContext);

  return (
    <>
      <h1 className="m-5 text-center text-3xl font-semibold md:text-left">
        The Doggos of {""}
        <span className="font-mtg text-4xl">Magic the Gathering</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {dados && dados.data.map((card) => <Card key={card.id} card={card} />)}
      </div>
    </>
  );
};

export default Cards;
