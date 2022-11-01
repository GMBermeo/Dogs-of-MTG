import { TCard } from "@/types/TCard";
import { TList } from "@/types/TList";

export async function loadCards() {
  const cardCollection: TCard[] = [];

  const crabCards = await fetch(
    "https://api.scryfall.com/cards/search?q=t:crab -is:digital order:released unique:prints -is:dfc -is:mdfc"
  )
    .then((res) => res.json() as Promise<TList>)
    .then((data) => cardCollection.push(...data.data));

  // const releaseTheDogs = await fetch(
  //   "https://api.scryfall.com/cards/7df3cd89-02c9-4a1c-9a8a-d17a0b1030c9"
  // )
  //   .then((res) => res.json() as Promise<TCard>)
  //   .then((data) => cardCollection.push(data));

  const crabTokens = await fetch(
    "https://api.scryfall.com/cards/search?q=t:crab t:token unique:art -is:dfc -is:mdfc"
  )
    .then((res) => res.json() as Promise<TList>)
    .then((data) => cardCollection.push(...data.data));

  // const mowuTokens = await fetch(
  //   "https://api.scryfall.com/cards/b10441dd-9029-4f95-9566-d3771ebd36bd"
  // )
  //   .then((res) => res.json() as Promise<TList>)
  //   .then((data) => console.log(data.data.map((card) => card.name)));

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

  return cardCollection;
}
