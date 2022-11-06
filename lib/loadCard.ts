import { TCard } from "@/types/TCard";
import { convertDoubleFacedCard } from "./convertResponseToCard";

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
    return cardResponse;
  }
}
