import { TCard } from "../types/TCard";
import { loadCards } from "./loadCards";

export async function getAllCardsIds() {
  const { data }: { data: TCard[] } = await loadCards();
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return data.map((card) => {
    return {
      params: {
        id: card.id,
      },
    };
  });
}
