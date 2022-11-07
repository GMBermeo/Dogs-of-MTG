import { TCard, TCardResponse, TDoubleFacedCardResponse } from "@/types/TCard";
import { TList } from "@/types/TList";
import { use } from "react";
import { convertCard, convertDoubleFacedCard } from "./convertResponseToCard";

export async function loadCards() {
  const cardCollection: TCard[] = [];

  // Load Dogs
  await fetch(
    "https://api.scryfall.com/cards/search?q=t:dog -is:digital in:paper order:released unique:art -is:dfc -is:mdfc"
  )
    .then((res) => res.json() as Promise<TList>)
    .then((data) =>
      data?.data?.map((card: TCardResponse) =>
        cardCollection.push(convertCard(card))
      )
    );

  // Release the Dogs
  await fetch(
    "https://api.scryfall.com/cards/7df3cd89-02c9-4a1c-9a8a-d17a0b1030c9"
  )
    .then((res) => res.json() as Promise<TCardResponse>)
    .then((data) => cardCollection.push(convertCard(data)));

  //Chakram Slinger
  await fetch(
    "https://api.scryfall.com/cards/3414b206-caff-4240-82ed-a1bb9c763d2f"
  )
    .then((res) => res.json() as Promise<TCardResponse>)
    .then((data) => cardCollection.push(convertCard(data)));

  // Dog Tokens
  await fetch(
    "https://api.scryfall.com/cards/search?q=t:dog t:token -is:digital in:paper unique:art -is:dfc -is:mdfc"
  )
    .then((res) => res.json() as Promise<TList>)
    .then((data) =>
      cardCollection.push(
        ...data?.data?.map((card: TCardResponse) => convertCard(card))
      )
    );

  // Alpine Houndmaster
  await fetch(
    "https://api.scryfall.com/cards/43224e74-2c51-40bd-bc34-f66e990a3e33"
  )
    .then((res) => res.json() as Promise<TCardResponse>)
    .then((data) => cardCollection.push(convertCard(data)));

  // Dogsnail Engine
  await fetch(
    "https://api.scryfall.com/cards/2003732e-efa5-42c7-8656-90fb4c9fc1e5"
  )
    .then((res) => res.json() as Promise<TCardResponse>)
    .then((data) => cardCollection.push(convertCard(data)));

  // Jiang Yanggu
  await fetch(
    "https://api.scryfall.com/cards/search?q=Jiang Yanggu -is:digital in:paper unique:art -is:dfc -is:mdfc"
  )
    .then((res) => res.json() as Promise<TList>)
    .then((data) =>
      cardCollection.push(
        ...data?.data?.map((card: TCardResponse) => convertCard(card))
      )
    );

  // Jinnie Fay
  await fetch(
    "https://api.scryfall.com/cards/search?q=Jinnie Fay -is:digital in:paper unique:art -is:dfc -is:mdfc"
  )
    .then((res) => res.json() as Promise<TList>)
    .then((data) =>
      cardCollection.push(
        ...data?.data?.map((card: TCardResponse) => convertCard(card))
      )
    );

  // Mordenkainen
  await fetch(
    "https://api.scryfall.com/cards/search?q=Mordenkainen t:planeswalker -is:digital in:paper -layout:emblem unique:art -is:dfc -is:mdfc"
  )
    .then((res) => res.json() as Promise<TList>)
    .then((data) =>
      cardCollection.push(
        ...data?.data?.map((card: TCardResponse) => convertCard(card))
      )
    );

  // Comet, Stellar Pup
  await fetch(
    "https://api.scryfall.com/cards/search?q=t:comet -is:digital in:paper order:released unique:art"
  )
    .then((res) => res.json() as Promise<TList>)
    .then((data) =>
      cardCollection.push(
        ...data?.data?.map((card: TCardResponse) => convertCard(card))
      )
    );

  // Ruff, Underdog Champ
  await fetch(
    "https://api.scryfall.com/cards/143052c4-a59a-4bb7-afff-ac38b23d820f"
  )
    .then((res) => res.json() as Promise<TCardResponse>)
    .then((data) => cardCollection.push(convertCard(data)));

  // Haldan, Avid Arcanist (related to Pako, Arcane Retriever)
  await fetch(
    "https://api.scryfall.com/cards/16a86a35-f7e5-434d-bf44-61ae7cb0f98b"
  )
    .then((res) => res.json() as Promise<TCardResponse>)
    .then((data) => cardCollection.push(convertCard(data)));

  // // Mowu Double Faced Token
  // const mowuDouble = await fetch(
  //   "https://api.scryfall.com/cards/b10441dd-9029-4f95-9566-d3771ebd36bd"
  // )
  //   .then((res) => res.json() as Promise<TDoubleFacedCardResponse>)
  //   .then((data) =>
  //     convertDoubleFacedCard(data).map((card: TCard) =>
  //       cardCollection.push(card)
  //     )
  //   );

  cardCollection.sort((a, b) => b.released_at.localeCompare(a.released_at));

  // cards.push(await res2.json());

  // console.log(dogCards);

  // try {
  // code that we will 'try' to run

  //   console.log("Dogs api carregados", data);
  // } catch (error) {
  // code to run if there are any problems
  // fetch("./localDogs.json")
  //   .then((response) => response.json())
  //   .then((json) => setDados(json));
  // console.log("Dogs local carregados");
  // }
  console.log(`${cardCollection.length} / ${20 * 24} folder`);
  return cardCollection;
}
