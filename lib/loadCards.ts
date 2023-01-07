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
  response.data.map((card: TCardResponse) => cards.push(convertCard(card)));
  return response;
}

export async function loadCards(type: "prints" | "art"): Promise<TCard[]> {
  const cardCollection: TCard[] = [];
  await sleep();

  // Load Dogs
  let dogs = await loadCardsFromUrl(
    `https://api.scryfall.com/cards/search?q=t:dog -is:digital in:paper order:released unique:${type} -is:dfc -is:mdfc`,
    cardCollection
  );
  while (dogs.has_more && dogs.next_page) {
    dogs = await loadCardsFromUrl(dogs.next_page, cardCollection);
  }

  // Jiang Yanggu
  const jiangYanggu = await loadCardsFromUrl(
    `https://api.scryfall.com/cards/search?q=Jiang Yanggu -is:digital in:paper unique:${type} -is:dfc -is:mdfc`,
    cardCollection
  );

  // Jinnie Fay
  const jinnieFay = await loadCardsFromUrl(
    `https://api.scryfall.com/cards/search?q=Jinnie Fay -is:digital in:paper unique:${type} -is:dfc -is:mdfc`,
    cardCollection
  );

  // Mordenkainen
  const mordenkainen = await loadCardsFromUrl(
    `https://api.scryfall.com/cards/search?q=Mordenkainen t:planeswalker -is:digital in:paper -layout:emblem unique:${type} -is:dfc -is:mdfc`,
    cardCollection
  );

  // Comet, Stellar Pup
  const cometStellarPup = await loadCardsFromUrl(
    `https://api.scryfall.com/cards/search?q=t:comet -is:digital in:paper order:released unique:${type}`,
    cardCollection
  );
  // Ronin Houndmaster
  const roninRoundMaster = await axios
    .get("https://api.scryfall.com/cards/614ead7b-1975-4a99-bdc2-f8afc6cf92d7")
    .then((res) => res.data as TCardResponse)
    .then((data) => cardCollection.push(convertCard(data)));

  // Release the Dogs
  const releaseTheDogs = await axios
    .get("https://api.scryfall.com/cards/7df3cd89-02c9-4a1c-9a8a-d17a0b1030c9")
    .then((res) => res.data as TCardResponse)
    .then((data) => cardCollection.push(convertCard(data)));

  //Chakram Slinger
  const chakramSlinger = await axios
    .get("https://api.scryfall.com/cards/3414b206-caff-4240-82ed-a1bb9c763d2f")
    .then((res) => res.data as TCardResponse)
    .then((data) => cardCollection.push(convertCard(data)));

  // Alpine Houndmaster
  const alpineHoundmaster = await axios
    .get("https://api.scryfall.com/cards/43224e74-2c51-40bd-bc34-f66e990a3e33")
    .then((res) => res.data as TCardResponse)
    .then((data) => cardCollection.push(convertCard(data)));

  // Dogsnail Engine
  const dogsnailEngine = await axios
    .get("https://api.scryfall.com/cards/2003732e-efa5-42c7-8656-90fb4c9fc1e5")
    .then((res) => res.data as TCardResponse)
    .then((data) => cardCollection.push(convertCard(data)));

  // Haldan, Avid Arcanist (related to Pako, Arcane Retriever)
  const haldanArcanist = await axios
    .get("https://api.scryfall.com/cards/16a86a35-f7e5-434d-bf44-61ae7cb0f98b")
    .then((res) => res.data as TCardResponse)
    .then((data) => cardCollection.push(convertCard(data)));

  // Mowu Double Faced Token
  const mowuDouble = await axios
    .get("https://api.scryfall.com/cards/b10441dd-9029-4f95-9566-d3771ebd36bd")
    .then((res) => res.data as TDoubleFacedCardResponse)
    .then((data) =>
      convertDoubleFacedCard(data).map((card: TCard) =>
        cardCollection.push(card)
      )
    );

  cardCollection.sort(
    (a, b) =>
      b.released_at?.localeCompare(a.released_at) ||
      b.collector_number.localeCompare(a.collector_number)
  );

  return cardCollection;
}

// // CHAT GPT
// export async function loadCards() {
//   const params = "-is:digital in:paper order:released -is:dfc -is:mdfc";
//   const cardCollection: TCard[] = [];
//   const addedCardIds: Set<string> = new Set();

//   // Load Dogs and other cards
//   const query =
//     "https://api.scryfall.com/cards/search?q=t:dog or t:comet or Jiang Yanggu or Jinnie Fay or Mordenkainen or multiverse_id=7df3cd89-02c9-4a1c-9a8a-d17a0b1030c9 or multiverse_id=3414b206-caff-4240-82ed-a1bb9c763d2f or multiverse_id=43224e74-2c51-40bd-bc34-f66e990a3e33";
//   let res = await axios
//     .get(`https://api.scryfall.com/cards/search?q=${query}`)
//     .then((res) => res.data as TList);

//   while (res.has_more && res.next_page) {
//     sleep();
//     res.data.map((card: TCardResponse | TDoubleFacedCardResponse) => {
//       if (card.layout === "double_faced_token") {
//         const doubleFacedCard = convertDoubleFacedCard(
//           card as TDoubleFacedCardResponse
//         );
//         if (!addedCardIds.has(doubleFacedCard[0].id)) {
//           cardCollection.push(doubleFacedCard[0]);
//           addedCardIds.add(doubleFacedCard[0].id);
//         }
//         if (!addedCardIds.has(doubleFacedCard[1].id)) {
//           cardCollection.push(doubleFacedCard[1]);
//           addedCardIds.add(doubleFacedCard[1].id);
//         }
//       } else if (card.layout === "normal") {
//         const convertedCard = convertCard(card as TCardResponse);
//         if (!addedCardIds.has(convertedCard.id)) {
//           cardCollection.push(convertedCard);
//           addedCardIds.add(convertedCard.id);
//         }
//       }
//     });

//     res = await axios.get(res.next_page).then((res) => res.data as TList);
//   }

//   return cardCollection;
// }
