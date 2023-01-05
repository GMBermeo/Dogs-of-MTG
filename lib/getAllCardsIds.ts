import { TCard } from "@/types/TCard";
// import { loadCardPrints } from "./loadCard";
import { loadCards, sleep } from "./loadCards";

export interface PathParams {
  params: { id: string };
}

export async function getAllCardsIds() {
  await sleep();
  const allCards: PathParams[] = [];
  const allCardsCollection = await loadCards("prints");

  allCardsCollection?.map((card) => {
    allCards.push({ params: { id: card.id } });
  });

  return allCards;
}
