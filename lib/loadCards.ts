import { TCard, TCardResponse, TDoubleFacedCardResponse } from "@/types/TCard";
import { TList } from "@/types/TList";
import axios from "axios";
import { convertCard, convertDoubleFacedCard } from "./convertResponseToCard";

export function sleep(): Promise<void> {
  if (!process.env.IS_BUILD) {
    return Promise.resolve();
  }
  const ms = Math.floor(1123.5 * (Math.random() + 2));
  console.log(`😴Building: ${ms}ms💤`);
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// async function loadCardsFromUrl(url: string, cards: TCard[]) {
//   await sleep();
//   const response = await axios.get(url).then((res) => res.data as TList);
//   response.data.map((card: TCardResponse) => cards.push(convertCard(card)));
//   return response;
// }

async function loadCardsFromUrl(url: string, cards: TCard[]) {
  await sleep();
  const response = await axios.get(url).then((res) => res.data as TList);
  response.data.forEach((card: TCardResponse) => cards.push(convertCard(card)));
  return response;
}

export async function loadCards(type: "prints" | "art"): Promise<TCard[]> {
  const cardCollection: TCard[] = [];
  await sleep();

  // Load Zombies
  let zombies = await loadCardsFromUrl(
    `https://api.scryfall.com/cards/search?q=t:zombie -is:digital in:paper order:released unique:${type} -is:dfc -is:mdfc -is:flip`,
    cardCollection
  );
  while (zombies.has_more && zombies.next_page) {
    zombies = await loadCardsFromUrl(zombies.next_page, cardCollection);
  }

  cardCollection.sort(
    (a, b) =>
      b.released_at?.localeCompare(a.released_at) ||
      b.collector_number.localeCompare(a.collector_number)
  );

  return cardCollection;
}
