import React from "react";
import CardImage from "./Card/CardImage";
import ArtCrop from "./Card/ArtCrop";
import CardName from "./Card/CardName";
import CardTags from "./Card/CardTags";
import OtherPrints from "./Card/OtherPrints";

const Card = ({ card }) => {
  const [prints, setPrints] = React.useState([]);

  return (
    <div className="row-end-auto m-0 rounded-lg bg-[#00000022] p-0 p-4 shadow-2xl shadow-orange-600/5 print:rounded-none print:bg-transparent print:shadow-none">
      <div className="flex justify-between ">
        <div className="text-sm font-medium">{card.released_at}</div>
        <CardTags
          full_art={card.full_art}
          promo={card.promo}
          reprint={card.reprint}
          variation={card.variation}
          frame={card.frame}
          prints={prints.length}
        />
      </div>
      <CardName name={card.name} link={card.related_uris.gatherer} />
      {prints.length >= 2 && (
        <ArtCrop src={card.image_uris.art_crop} large={card.image_uris.large} />
      )}
      {prints.length === 1 ? (
        <>
          <CardImage src={card.image_uris.png} large={card.image_uris.large} />
          <p className="text-center font-bold">{card.set_name}</p>
        </>
      ) : (
        <>
          <p className="font-bold">{card.set_name}</p>
          <OtherPrints
            prints_search_uri={card.prints_search_uri}
            setPrints={setPrints}
            prints={prints}
          />
        </>
      )}
    </div>
  );
};

export default Card;
