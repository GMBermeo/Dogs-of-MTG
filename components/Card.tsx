import React, { memo, useMemo } from "react";
import { CardImage } from "./Card/CardImage";
import { CardName } from "./Card/CardName";
import { CardTags } from "./Card/CardTags";
import { TCard } from "@/types/TCard";
import Link from "next/link";
import { loadCardPrintsQuantity } from "@/lib/loadCard";
import s from "./Card.module.scss";

export const CardComponent = ({
  card,
  index,
}: {
  card: TCard;
  index: number;
}) => {
  const [prints, setPrints] = React.useState<number>(0);

  React.useEffect(() => {
    loadCardPrintsQuantity(card.prints_search_uri).then((data) => {
      setPrints(data);
    });
  }, [card.prints_search_uri]);

  const memoizedCardImage = useMemo(
    () => (
      <CardImage
        large={card.image_uris.large}
        normal={card.image_uris.normal}
        small={card.image_uris.small}
        id={card.id}
        name={card.name}
        artist={card.artist}
        frame={card.released_at.slice(0, 4)}
        flavor_text={card?.flavor_text}
      />
    ),
    [
      card.image_uris.large,
      card.image_uris.normal,
      card.image_uris.small,
      card.id,
      card.name,
      card.artist,
      card.released_at,
      card?.flavor_text,
    ]
  );

  return (
    <Link href={`/card/${card.id}`} className={s.Link}>
      <div className="flex justify-between">
        <div className="text-sm font-medium">{card.released_at}</div>
        {prints > 1 && (
          <h6 className="text-center text-xs font-semibold">{prints} prints</h6>
        )}
      </div>
      <div className="mt-1 flex justify-between">
        <CardName name={card.name} />
        <CardTags
          full_art={card.full_art}
          promo={card.promo}
          reprint={card.reprint}
          variation={card.variation}
        />
      </div>
      {memoizedCardImage}
      <div className="mb-2 flex flex-col gap-y-2">
        <h4 className="text-center font-bold">{card.set_name}</h4>
        <p className="hidden print:block">{index}</p>
      </div>
    </Link>
  );
};

export const Card = memo(CardComponent);
