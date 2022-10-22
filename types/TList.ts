import { TCard } from "./TCard";

export type TList = {
  object: "list" | string;
  total_cards: number;
  has_more: boolean;
  data: TCard[];
};
