import React from "react";
import { GlobalContext } from "../GlobalContext";
import CardImage from "./CardImage";
import CardName from "./CardName";
import CardTags from "./CardTags";

const Cards = () => {
  const { dados } = React.useContext(GlobalContext);

  function totalCards(uri) {
    fetch(uri)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.total_cards);
      });
  }

  return (
    <>
      <h1 className="m-4 text-4xl font-semibold">Cards</h1>
      <div className="grid">
        {dados &&
          dados.data.map((card) => (
            <div className="clear-left ml-4 w-max" key={card.id}>
              <CardImage src={card.image_uris.large} />
              <div className="min-h-[200px] w-max overflow-auto">
                <CardName name={card.name} link={card.related_uris.gatherer} />
                <p className="font-bold">{card.set_name}</p>
                <p className="text-sm font-medium">{card.released_at}</p>
                <p className="text-sm font-medium">Frame: {card.frame}</p>

                <CardTags
                  full_art={card.full_art}
                  promo={card.promo}
                  reprint={card.reprint}
                  variation={card.variation}
                />

                {/* <p>Total Cards: {totalCards(card.prints_search_uri)}</p> */}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Cards;
