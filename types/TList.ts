import { TCardResponse } from "./TCard";

export type TList = {
  object: "list" | string;
  total_cards: number;
  has_more: boolean;
  next_page?: string;
  data: TCardResponse[];
};
