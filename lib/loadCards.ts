import { TCard, TCardResponse, TDoubleFacedCardResponse } from "@/types/TCard";
import { TList } from "@/types/TList";
import axios from "axios";
import { convertCard, convertDoubleFacedCard } from "./convertResponseToCard";

export async function loadCards() {
  const cardCollection: TCard[] = [];

  // Load Dogs
  const dogs = await axios
    .get(
      "https://api.scryfall.com/cards/search?q=t:dog -is:digital in:paper order:released unique:art -is:dfc -is:mdfc"
    )
    .then((res) => res.data as TList);
  dogs.data.map((card: TCardResponse) =>
    cardCollection.push(convertCard(card))
  );

  // Jiang Yanggu
  const jiangYanggu = await axios
    .get(
      "https://api.scryfall.com/cards/search?q=Jiang Yanggu -is:digital in:paper unique:art -is:dfc -is:mdfc"
    )
    .then((res) => res.data as TList);
  jiangYanggu.data.map((card: TCardResponse) =>
    cardCollection.push(convertCard(card))
  );

  // Jinnie Fay
  const jinnieFay = await axios
    .get(
      "https://api.scryfall.com/cards/search?q=Jinnie Fay -is:digital in:paper unique:art -is:dfc -is:mdfc"
    )
    .then((res) => res.data as TList);
  jinnieFay.data.map((card: TCardResponse) =>
    cardCollection.push(convertCard(card))
  );

  // Mordenkainen
  const mordenkainen = await axios
    .get(
      "https://api.scryfall.com/cards/search?q=Mordenkainen t:planeswalker -is:digital in:paper -layout:emblem unique:art -is:dfc -is:mdfc"
    )
    .then((res) => res.data as TList);
  mordenkainen.data.map((card: TCardResponse) =>
    cardCollection.push(convertCard(card))
  );

  // Comet, Stellar Pup
  const cometStellarPup = await axios
    .get(
      "https://api.scryfall.com/cards/search?q=t:comet -is:digital in:paper order:released unique:art"
    )
    .then((res) => res.data as TList);
  cometStellarPup.data.map((card: TCardResponse) =>
    cardCollection.push(convertCard(card))
  );

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

  // Ruff, Underdog Champ
  const Ruff = await axios
    .get("https://api.scryfall.com/cards/143052c4-a59a-4bb7-afff-ac38b23d820f")
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

  cardCollection.sort((a, b) => b.released_at?.localeCompare(a.released_at));

  // cards.push(await res2.json());

  // console.log(dogCards);

  // try {
  // code that we will 'try' to run

  //   console.log("Dogs api carregados", data);
  // } catch (error) {
  // code to run if there are any problems
  // axios.get("./localDogs.json")
  //   .then((response) => response.json())
  //   .then((json) => setDados(json));
  // console.log("Dogs local carregados");
  // }
  // console.log(`${cardCollection.length} / ${20 * 24} folder`);
  return cardCollection;
}
