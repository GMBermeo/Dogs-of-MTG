import { TCard } from "@/types/TCard";

export async function loadCard(id: string): Promise<TCard> {
  const res = await fetch(`https://api.scryfall.com/cards/${id}`);
  const card = (await res.json()) as TCard;

  return card;
}
