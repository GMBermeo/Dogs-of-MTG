import React from "react";
import CardImage from "./Card/CardImage";
import CardName from "./Card/CardName";
import CardTags from "./Card/CardTags";
import OtherPrints from "./Card/OtherPrints";

const Card = ({ card }) => {
  const [prints, setPrints] = React.useState([]);

  return (
    <div className="xs:p-1 ml-4 mb-6 p-0 md:rounded-lg md:bg-[#00000022] md:p-4">
      <CardImage src={card.image_uris.small} large={card.image_uris.large} />
      <CardName name={card.name} link={card.related_uris.gatherer} />
      <p className="font-bold">{card.set_name}</p>
      <p className="text-sm font-medium">{card.released_at}</p>
      <p className="text-sm font-medium">Frame: {card.frame}</p>

      <CardTags
        full_art={card.full_art}
        promo={card.promo}
        reprint={card.reprint}
        variation={card.variation}
        prints={prints.length}
      />
      <OtherPrints
        prints_search_uri={card.prints_search_uri}
        setPrints={setPrints}
        prints={prints}
      />
    </div>
  );
};

export default Card;
