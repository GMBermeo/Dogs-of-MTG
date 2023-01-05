import {
  AllParts,
  CardFace,
  ImageUrisCard,
  Legalities,
  Preview,
  Prices,
  PurchaseUris,
  RelatedUris,
} from "./TCardParts";

export interface TCard {
  id: string;
  name: string;
  released_at: string;
  illustration_id: string;
  image_uris: ImageUrisCard;
  flavor_text: string | null;
  type_line: string;
  power: string | null;
  toughness: string | null;
  promo: boolean;
  reprint: boolean;
  variation: boolean;
  full_art: boolean;
  textless: boolean;
  prints_search_uri: string;
  set_name: string;
  artist: string;
  collector_number: string;
  rarity: string;
  oracle_text: string | null;
  frame: string;
  related_uris: RelatedUris;
  all_parts: AllParts[] | null;
  prices: Prices;
}

export interface TCardResponse extends TCard {
  object: "card" | string;
  oracle_id: string | string[];
  multiverse_ids: number[];
  tcgplayer_id: number;
  cardmarket_id: number;
  lang: "en" | string;
  uri: string;
  scryfall_uri: string;
  layout: "normal" | "double_faced_token" | string;
  highres_image: boolean;
  image_status: "highres_scan" | string;
  mana_cost: string;
  cmc: number;
  colors: string[];
  color_identity: string[];
  keywords: string[];
  legalities: Legalities;
  games: string[];
  reserved: boolean;
  foil: boolean;
  nonfoil: boolean;
  finishes: string[];
  oversized: boolean;
  set_id: string;
  set: string;
  set_type: string;
  set_uri: string;
  set_search_uri: string;
  scryfall_set_uri: string;
  rulings_uri: string;
  digital: boolean;
  card_back_id: string;
  border_color: string;
  security_stamp: string;
  booster: boolean;
  story_spotlight: boolean;
  preview?: Preview;
  prices: Prices;
  purchase_uris: PurchaseUris;
  mtgo_id?: number;
  edhrec_rank?: number;
  penny_rank?: number;
  arena_id?: number;
  produced_mana: string[];
  frame_effects: string[];
  promo_types: string[];
  mtgo_foil_id?: number;
  watermark: string;
}

export type TDoubleFacedCardResponse = {
  object: "card" | string;
  id: string;
  oracle_id: string | string[];
  multiverse_ids: number[];
  tcgplayer_id: number;
  name: string;
  lang: "en" | string;
  released_at: string;
  uri: string;
  scryfall_uri: string;
  layout: "double_faced_token" | string;
  highres_image: boolean;
  image_status: "highres_scan" | string;
  cmc: number;
  type_line: string;
  color_identity: string[];
  keywords: any[];
  card_faces: CardFace[];
  all_parts: AllParts[];
  legalities: Legalities;
  games: string[];
  reserved: boolean;
  foil: boolean;
  nonfoil: boolean;
  finishes: string[];
  oversized: boolean;
  promo: boolean;
  reprint: boolean;
  variation: boolean;
  set_id: string;
  set: string;
  set_name: string;
  set_type: string;
  set_uri: string;
  set_search_uri: string;
  scryfall_set_uri: string;
  rulings_uri: string;
  prints_search_uri: string;
  collector_number: string;
  digital: boolean;
  rarity: string;
  artist: string;
  artist_ids: string[];
  border_color: string;
  frame: string;
  frame_effects: string[];
  full_art: boolean;
  textless: boolean;
  booster: boolean;
  story_spotlight: boolean;
  prices: Prices;
  related_uris: RelatedUris;
  purchase_uris: PurchaseUris;
};
