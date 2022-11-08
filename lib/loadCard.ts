import axios from "axios";
import { TCard, TCardResponse, TDoubleFacedCardResponse } from "@/types/TCard";
import { TList } from "@/types/TList";
import {
  convertCard,
  convertDoubleFacedCard,
  convertDoubleFacedCardToOne,
} from "./convertResponseToCard";

export interface TCardWithPrints {
  card: TCard;
  prints: TCard[];
}

export async function loadCard(id: string): Promise<TCardWithPrints> {
  const cardResponse = await axios
    .get(`https://api.scryfall.com/cards/${id}`)
    .then((res) => res.data as TCardResponse | TDoubleFacedCardResponse);

  if (cardResponse.layout === "double_faced_token") {
    const card = convertDoubleFacedCardToOne(
      cardResponse as TDoubleFacedCardResponse
    );
    const prints = convertDoubleFacedCard(
      cardResponse as TDoubleFacedCardResponse
    );
    return { card, prints };
  }

  const printsResponse = await axios
    .get(
      `https://api.scryfall.com/cards/search?order=released&q=oracleid%3A${cardResponse.oracle_id}&unique=prints`
    )
    .then((res) => res.data as TList)
    .then((data) => data?.data?.map((card) => convertCard(card)));

  const cardWithPrints: TCardWithPrints = {
    card: convertCard(cardResponse as TCardResponse),
    prints: printsResponse,
  };

  return cardWithPrints;
  // }
}

export async function loadCardPrintsQuantity(
  prints_search_uri: string
): Promise<number> {
  const res = await axios
    .get(prints_search_uri)
    .then((res) => res.data as TList);

  return res.total_cards;
}

// export async function loadCardPrints(oracle_id?: string): Promise<TCard[]> {
//   const cardPrints: TCard[] = [];
//   if (oracle_id) {
//     const resParent = await axios.get(
//       `https://api.scryfall.com/cards/${oracle_id}`
//     );
//     const cardResponse = (await resParent.json()) as TCardResponse;

//     const res = await axios.get(
//       `https://api.scryfall.com/cards/search?order=released&q=oracleid%3A${oracle_id}&unique=prints`
//     );
//     const printsResponse: TList = (await res.json()) as TList;
//     printsResponse?.data?.map((cardResponse: TCardResponse) => {
//       cardPrints.push(convertCard(cardResponse));
//     });
//   }
//   return cardPrints;
// }
