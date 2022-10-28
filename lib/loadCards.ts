import { TList } from "@/types/TList";

export async function loadCards() {
  const res = await fetch(
    "https://api.scryfall.com/cards/search?q=t:dog -is:digital order:released unique:art"
  );
  const cards = (await res.json()) as TList;
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

  return cards;
}
