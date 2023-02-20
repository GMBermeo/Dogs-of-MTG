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

  // Load Lands
  let lands = await loadCardsFromUrl(
    `https://api.scryfall.com/cards/search?q=t:land is:fullart -is:digital in:paper order:released unique:${type} -is:dfc -is:mdfc`,
    cardCollection
  );
  while (lands.has_more && lands.next_page) {
    lands = await loadCardsFromUrl(lands.next_page, cardCollection);
  }

  // await axios
  //   .get(
  //     `https://api.scryfall.com/cards/search?q=t:land -is:digital in:paper order:released unique:${type} is:dfc is:mdfc`
  //   )
  //   .then((res) => res.data as TDoubleFacedCardResponse)
  //   .then((data) =>
  //     convertDoubleFacedCard(data).map((card: TCard) =>
  //       cardCollection.push(card)
  //     )
  //   );

  cardCollection.sort(
    (a, b) =>
      b.released_at?.localeCompare(a.released_at) ||
      b.collector_number.localeCompare(a.collector_number)
  );

  return cardCollection;
}
