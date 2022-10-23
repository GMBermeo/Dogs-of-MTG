/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { loadCardPrints } from "../lib/loadCardPrints";
import { TCard } from "../types/TCard";
import { TList } from "../types/TList";
import { Card } from "./Card";

export const CardList = ({ cards }: { cards: TList }) => {
  return (
    <div className="mx-5 grid grid-cols-1 gap-5 print:h-1/2 print:grid-cols-3 print:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {cards && cards.data.map((card) => <Card key={card.id} card={card} />)}
    </div>
  );
};
