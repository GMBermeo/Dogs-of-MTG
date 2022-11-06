import React from "react";
import { CardImage } from "./Card/CardImage";
import { CardName } from "./Card/CardName";
import { CardTags } from "./Card/CardTags";
import { OtherPrints } from "./Card/OtherPrints";
import { loadCardPrints } from "@/lib/loadCardPrints";
import { TCard } from "@/types/TCard";
import Link from "next/link";

export const Card = ({ card }: { card: TCard }) => {
  const [prints, setPrints] = React.useState<TCard[]>([]);

  React.useEffect(() => {
    loadCardPrints(card.prints_search_uri).then((data) => {
      setPrints(data);
    });
  }, [card.prints_search_uri]);

  return (
    <Link
      href={`/card/${card.id}`}
      className="row-end-auto m-0 rounded-xl bg-[#00000022] p-4 shadow-2xl shadow-orange-600/5 print:block print:rounded-none print:bg-transparent print:p-0 print:shadow-none"
    >
      <div className="flex justify-between">
        <div className="text-sm font-medium">{card.released_at}</div>
        {prints.length > 1 && (
          <h6 className="text-center text-sm font-semibold">
            {prints.length} prints
          </h6>
        )}
      </div>
      <div className="mt-1 flex justify-between">
        <CardName name={card.name} link={"/card/" + card.id} />
        <CardTags
          full_art={card.full_art}
          promo={card.promo}
          reprint={card.reprint}
          variation={card.variation}
        />
      </div>
      <CardImage
        png={card.image_uris.png}
        large={card.image_uris.large}
        small={card.image_uris.small}
        id={card.id}
        name={card.name}
        artist={card.artist}
        frame={card.released_at.slice(0, 4)}
        flavor_text={card?.flavor_text}
      />
      <div className="mb-2 flex flex-col gap-y-2">
        <h4 className="text-center font-bold">{card.set_name}</h4>
      </div>
    </Link>
  );
};
