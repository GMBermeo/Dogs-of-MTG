import { TCard } from "../types/TCard";
import { TList } from "../types/TList";

export async function loadCardPrints(
  prints_search_uri: string
): Promise<TCard[]> {
  const res = await fetch(prints_search_uri);
  const cardPrints = (await res.json()) as TList;

  return cardPrints.data;
}
