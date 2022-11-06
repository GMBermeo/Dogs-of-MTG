import { TCard, TCardResponse } from "@/types/TCard";
import { TList } from "@/types/TList";
import { convertCard, convertDoubleFacedCard } from "./convertResponseToCard";

export async function loadCard(id: string): Promise<TCard> {
  const res = await fetch(`https://api.scryfall.com/cards/${id}`);
  // const card = (await res.json());
  const cardResponse = (await res.json()) as any;
  if (cardResponse.layout == "double_faced_token") {
    const cardFaces: TCard[] = [];
    convertDoubleFacedCard(cardResponse).map((cardConverted: TCard) =>
      cardFaces.push(cardConverted)
    );
    return cardFaces[0];
  } else {
    return convertCard(cardResponse);
  }
}

// export async function loadCardPrints(
//   prints_search_uri: string
// ): Promise<TCardResponse[]> {
//   const res = await fetch(prints_search_uri);
//   const cardPrints = (await res.json()) as TList;

//   return cardPrints.data;
// }

export async function loadCardPrints(
  prints_search_uri: string
): Promise<TCard[]> {
  const cardPrints: TCard[] = [];

  const res = await fetch(prints_search_uri);
  const printsResponse: TList = (await res.json()) as any;
  printsResponse?.data?.map((cardResponse: TCardResponse) => {
    cardPrints.push(convertCard(cardResponse));
  });

  return cardPrints;
}
