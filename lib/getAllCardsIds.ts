import { TCard } from "@/types/TCard";
import { loadCardPrints } from "./loadCardPrints";
import { loadCards } from "./loadCards";

interface PathParams {
  params: { id: string };
}

export async function getAllCardsIds() {
  // eslint-disable-next-line prefer-const
  let allCards: PathParams[] = [];
  const allCardsUnformated: TCard[] = [];
  const { data }: { data: TCard[] } = await loadCards();

  // async function getPrints(card: TCard) {
  //   const prints = await loadCardPrints(card.prints_search_uri);
  //   allCardsUnformated.push(...prints);
  // }

  // data.map((card) => {
  //   getPrints(card);
  //   allCardsUnformated.push(card);
  // });

  async function getPrints(card: TCard) {
    const prints = await loadCardPrints(card.prints_search_uri);
    prints.forEach((element) => {
      allCards.push({ params: { id: element.id } });
    });
  }

  data?.map((card) => {
    allCards.push({ params: { id: card.id } });
    getPrints(card);
  });

  // data.map((card) => getPrints(card));
  // allCardsPath = data;

  return allCards;
  // return allCards.map((card) => {
  //   return {
  //     params: {
  //       id: card.id,
  //     },
  //   };
  // });
}
