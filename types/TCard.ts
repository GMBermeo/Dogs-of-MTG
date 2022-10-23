export type TCard = {
  object: "card" | string;
  id: string;
  oracle_id: string[];
  multiverse_ids: number[];
  tcgplayer_id: number;
  cardmarket_id: number;
  name: string;
  lang: "en" | string;
  released_at: string;
  uri: string;
  scryfall_uri: string;
  layout: "normal" | string;
  highres_image: boolean;
  image_status: "highres_scan" | string;
  image_uris: ImageUris;
  flavor_text: string;
  mana_cost: string;
  cmc: number;
  type_line: string;
  oracle_text: string;
  power: string;
  toughness: string;
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
  card_back_id: string;
  artist: string;
  illustration_id: string;
  border_color: string;
  frame: string;
  security_stamp: string;
  full_art: boolean;
  textless: boolean;
  booster: boolean;
  story_spotlight: boolean;
  preview?: Preview;
  prices: Prices;
  related_uris: RelatedUris;
  purchase_uris: PurchaseUris;
  mtgo_id?: number;
  edhrec_rank?: number;
  penny_rank?: number;
  arena_id?: number;
  produced_mana: string[];
  frame_effects: string[];
  all_parts: AllPart[];
  promo_types: string[];
  mtgo_foil_id?: number;
  watermark: string;
};

export interface ImageUris {
  small: string;
  normal: string;
  large: string;
  png: string;
  art_crop: string;
  border_crop: string;
}

export type LegalitiesOptions = "legal" | "not_legal" | "restricted" | "banned";

export interface Legalities {
  standard: LegalitiesOptions;
  future: LegalitiesOptions;
  historic: LegalitiesOptions;
  gladiator: LegalitiesOptions;
  pioneer: LegalitiesOptions;
  explorer: LegalitiesOptions;
  modern: LegalitiesOptions;
  legacy: LegalitiesOptions;
  pauper: LegalitiesOptions;
  vintage: LegalitiesOptions;
  penny: LegalitiesOptions;
  commander: LegalitiesOptions;
  brawl: LegalitiesOptions;
  historicbrawl: LegalitiesOptions;
  alchemy: LegalitiesOptions;
  paupercommander: LegalitiesOptions;
  duel: LegalitiesOptions;
  oldschool: LegalitiesOptions;
  premodern: LegalitiesOptions;
}

export interface Preview {
  source: string;
  source_uri: string;
  previewed_at: string;
}

export interface Prices {
  usd: string | null;
  usd_foil: string | null;
  usd_etched?: any | null;
  eur: string | null;
  eur_foil: string | null;
  tix: string | null;
}

export interface RelatedUris {
  gatherer: string;
  tcgplayer_infinite_articles: string;
  tcgplayer_infinite_decks: string;
  edhrec: string;
}

export interface PurchaseUris {
  tcgplayer: string;
  cardmarket: string;
  cardhoarder: string;
}

export interface AllPart {
  object: string;
  id: string;
  component: string;
  name: string;
  type_line: string;
  uri: string;
}

export type TCardManual = {
  object: string;
  id: string;
  oracle_id: string;
  multiverse_ids: [number];
  mtgo_id: number;
  tcgplayer_id: number;
  cardmarket_id: number;
  name: string;
  lang: "en" | string;
  released_at: string;
  uri: string;
  scryfall_uri: string;
  layout: "normal" | string;
  highres_image: false;
  image_status: "lowres";
  image_uris: {
    small: "https://c1.scryfall.com/file/scryfall-cards/small/front/a/8/a8b85603-0ac6-4587-9724-e35ac06ffab9.jpg?1655824548";
    normal: "https://c1.scryfall.com/file/scryfall-cards/normal/front/a/8/a8b85603-0ac6-4587-9724-e35ac06ffab9.jpg?1655824548";
    large: "https://c1.scryfall.com/file/scryfall-cards/large/front/a/8/a8b85603-0ac6-4587-9724-e35ac06ffab9.jpg?1655824548";
    png: "https://c1.scryfall.com/file/scryfall-cards/png/front/a/8/a8b85603-0ac6-4587-9724-e35ac06ffab9.png?1655824548";
    art_crop: "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/a/8/a8b85603-0ac6-4587-9724-e35ac06ffab9.jpg?1655824548";
    border_crop: "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/a/8/a8b85603-0ac6-4587-9724-e35ac06ffab9.jpg?1655824548";
  };
  mana_cost: "{2}{B}{R}";
  cmc: 4.0;
  type_line: "Creature — Elemental Dog";
  oracle_text: "{1}, Sacrifice another creature: Blazing Hellhound deals 1 damage to any target.";
  power: "4";
  toughness: "3";
  colors: ["B", "R"];
  color_identity: ["B", "R"];
  keywords: [];
  legalities: {
    standard: "not_legal";
    future: "not_legal";
    historic: "not_legal";
    gladiator: "not_legal";
    pioneer: "legal";
    explorer: "not_legal";
    modern: "legal";
    legacy: "legal";
    pauper: "not_legal";
    vintage: "legal";
    penny: "legal";
    commander: "legal";
    brawl: "not_legal";
    historicbrawl: "not_legal";
    alchemy: "not_legal";
    paupercommander: "restricted";
    duel: "legal";
    oldschool: "not_legal";
    premodern: "not_legal";
  };
  games: ["paper", "mtgo"];
  reserved: false;
  foil: true;
  nonfoil: true;
  finishes: ["nonfoil", "foil"];
  oversized: false;
  promo: false;
  reprint: true;
  variation: false;
  set_id: "5a645837-b050-449f-ac90-1e7ccbf45031";
  set: "2x2";
  set_name: "Double Masters 2022";
  set_type: "masters";
  set_uri: "https://api.scryfall.com/sets/5a645837-b050-449f-ac90-1e7ccbf45031";
  set_search_uri: "https://api.scryfall.com/cards/search?order=set\u0026q=e%3A2x2\u0026unique=prints";
  scryfall_set_uri: "https://scryfall.com/sets/2x2?utm_source=api";
  rulings_uri: "https://api.scryfall.com/cards/a8b85603-0ac6-4587-9724-e35ac06ffab9/rulings";
  prints_search_uri: "https://api.scryfall.com/cards/search?order=released\u0026q=oracleid%3A598a7410-35e8-4d62-9bf1-d44ee7717040\u0026unique=prints";
  collector_number: "183";
  digital: false;
  rarity: "uncommon";
  flavor_text: "It tears the flesh from your bones and then swallows the ash with its fiery maw.";
  card_back_id: "0aeebaf5-8c7d-4636-9e82-8c27447861f7";
  artist: "Eric Velhagen";
  artist_ids: ["9f85c6c1-5cf4-4092-bb65-006eaca188d4"];
  illustration_id: "ee8d7e08-98b9-4d25-a71a-707791c94d2f";
  border_color: "black";
  frame: "2015";
  full_art: false;
  textless: false;
  booster: true;
  story_spotlight: false;
  edhrec_rank: 17340;
  preview: {
    source: "Ashlizzle";
    source_uri: "https://twitter.com/Ashlizzlle_/status/1539035821482860545";
    previewed_at: "2022-06-20";
  };
  prices: {
    usd: "0.10";
    usd_foil: "0.17";
    usd_etched: null;
    eur: "0.02";
    eur_foil: "0.02";
    tix: "0.03";
  };
  related_uris: {
    gatherer: "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=571516";
    tcgplayer_infinite_articles: "https://infinite.tcgplayer.com/search?contentMode=article\u0026game=magic\u0026partner=scryfall\u0026q=Blazing+Hellhound\u0026utm_campaign=affiliate\u0026utm_medium=api\u0026utm_source=scryfall";
    tcgplayer_infinite_decks: "https://infinite.tcgplayer.com/search?contentMode=deck\u0026game=magic\u0026partner=scryfall\u0026q=Blazing+Hellhound\u0026utm_campaign=affiliate\u0026utm_medium=api\u0026utm_source=scryfall";
    edhrec: "https://edhrec.com/route/?cc=Blazing+Hellhound";
  };
  purchase_uris: {
    tcgplayer: "https://www.tcgplayer.com/product/276633?page=1\u0026utm_campaign=affiliate\u0026utm_medium=api\u0026utm_source=scryfall";
    cardmarket: "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall\u0026searchString=Blazing+Hellhound\u0026utm_campaign=card_prices\u0026utm_medium=text\u0026utm_source=scryfall";
    cardhoarder: "https://www.cardhoarder.com/cards/101850?affiliate_id=scryfall\u0026ref=card-profile\u0026utm_campaign=affiliate\u0026utm_medium=card\u0026utm_source=scryfall";
  };
};
