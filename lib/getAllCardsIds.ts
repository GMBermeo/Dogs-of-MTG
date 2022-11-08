import { TCard } from "@/types/TCard";
// import { loadCardPrints } from "./loadCard";
import { loadCards } from "./loadCards";

export interface PathParams {
  params: { id: string };
}

export async function getAllCardsIds() {
  const allCards: PathParams[] = [];
  // const allCardsUnformated: TCardResponse[] = [];
  const data: TCard[] = await loadCards();

  // async function getPrints(card: TCard) {
  //   const prints = await loadCardPrints(card.prints_search_uri);
  //   allCardsUnformated.push(...prints);
  // }

  // data.map((card) => {
  //   getPrints(card);
  //   allCardsUnformated.push(card);
  // });

  async function getPrints(card: TCard) {
    // const prints = await loadCardPrints(card.prints_search_uri);
    // prints.forEach((element) => {
    //   allCards.push({ params: { id: element.id } });
    // });
  }

  data?.map((card) => {
    allCards.push({ params: { id: card.id } });
    getPrints(card);
  });

  // data.map((card) => getPrints(card));
  // allCardsPath = data;

  // console.log(allCards);

  return allCards;
  // return allCards.map((card) => {
  //   return {
  //     params: {
  //       id: card.id,
  //     },
  //   };
  // });
}
