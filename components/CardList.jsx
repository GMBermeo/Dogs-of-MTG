/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

import Card from "./Card";

export const CardList = ({ cards }) => {
  return (
    <div className="print:bg-white print:text-black">
      <h1 className="m-5 inline-flex items-center text-center text-3xl font-semibold print:hidden md:text-left">
        <img src="/favicon.svg" className="mr-2 h-12 rounded-full" />
        The Doggos of
        <span className="font-mtg ml-2 self-end text-4xl">
          Magic the Gathering
        </span>
      </h1>
      <div className="mx-5 grid grid-cols-1 gap-5 print:h-1/2 print:grid-cols-3 print:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {cards && cards.data.map((card) => <Card key={card.id} card={card} />)}
      </div>
    </div>
  );
};
