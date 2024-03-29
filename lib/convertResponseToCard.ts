import { TCard, TCardResponse, TDoubleFacedCardResponse } from "@/types/TCard";

export function convertCard(card: TCardResponse): TCard {
  return {
    id: card.id,
    name: card.name,
    released_at: card.released_at,
    illustration_id: card.illustration_id,
    image_uris: card.image_uris,
    flavor_text: card.flavor_text || null,
    type_line: card.type_line,
    power: card.power || null,
    toughness: card.toughness || null,
    promo: card.promo,
    reprint: card.reprint,
    variation: card.variation,
    full_art: card.full_art,
    textless: card.textless,
    prints_search_uri: card.prints_search_uri,
    set_name: card.set_name,
    artist: card.artist,
    collector_number: card.collector_number,
    rarity: card.rarity,
    oracle_text: card.oracle_text || null,
    frame: card.frame,
    related_uris: card.related_uris,
    all_parts: card.all_parts || null,
    prices: card.prices,
  };
}

export function convertDoubleFacedCard(
  doubleFacedCard: TDoubleFacedCardResponse
): TCard[] {
  return [
    {
      id: doubleFacedCard.id,
      name: doubleFacedCard.card_faces[0].name,
      released_at: doubleFacedCard.released_at,
      illustration_id: doubleFacedCard.card_faces[0].illustration_id,
      image_uris: {
        small: doubleFacedCard.card_faces[0].image_uris.small,
        large: doubleFacedCard.card_faces[0].image_uris.large,
        normal: doubleFacedCard.card_faces[0].image_uris.normal,
        art_crop: doubleFacedCard.card_faces[0].image_uris.art_crop,
      },
      flavor_text: null,
      type_line: doubleFacedCard.card_faces[0].type_line,
      power: doubleFacedCard.card_faces[0].power || null,
      toughness: doubleFacedCard.card_faces[0].toughness || null,
      promo: doubleFacedCard.promo,
      reprint: doubleFacedCard.reprint,
      variation: doubleFacedCard.variation,
      full_art: doubleFacedCard.full_art,
      textless: doubleFacedCard.textless,
      prints_search_uri: doubleFacedCard.prints_search_uri,
      set_name: doubleFacedCard.set_name,
      artist: doubleFacedCard.card_faces[0].artist,
      collector_number: doubleFacedCard.collector_number,
      rarity: doubleFacedCard.rarity,
      oracle_text: doubleFacedCard.card_faces[0].oracle_text || null,
      frame: doubleFacedCard.frame,
      related_uris: doubleFacedCard.related_uris,
      all_parts: doubleFacedCard.all_parts || null,
      prices: doubleFacedCard.prices,
    },
    {
      id: doubleFacedCard.id,
      name: doubleFacedCard.card_faces[1].name,
      released_at: doubleFacedCard.released_at,
      illustration_id: doubleFacedCard.card_faces[1].illustration_id,
      image_uris: {
        small: doubleFacedCard.card_faces[1].image_uris.small,
        large: doubleFacedCard.card_faces[1].image_uris.large,
        normal: doubleFacedCard.card_faces[1].image_uris.normal,
        art_crop: doubleFacedCard.card_faces[1].image_uris.art_crop,
      },
      flavor_text: null,
      type_line: doubleFacedCard.card_faces[1].type_line,
      power: doubleFacedCard.card_faces[1].power || null,
      toughness: doubleFacedCard.card_faces[1].toughness || null,
      promo: doubleFacedCard.promo,
      reprint: doubleFacedCard.reprint,
      variation: doubleFacedCard.variation,
      full_art: doubleFacedCard.full_art,
      textless: doubleFacedCard.textless,
      prints_search_uri: doubleFacedCard.prints_search_uri,
      set_name: doubleFacedCard.set_name,
      artist: doubleFacedCard.card_faces[1].artist,
      collector_number: doubleFacedCard.collector_number,
      rarity: doubleFacedCard.rarity,
      oracle_text: doubleFacedCard.card_faces[1].oracle_text || null,
      frame: doubleFacedCard.frame,
      related_uris: doubleFacedCard.related_uris,
      all_parts: doubleFacedCard.all_parts || null,
      prices: doubleFacedCard.prices,
    },
  ];
}

export function convertDoubleFacedCardToOne(
  doubleFacedCard: TDoubleFacedCardResponse
): TCard {
  return {
    id: doubleFacedCard.id,
    name: doubleFacedCard.name,
    released_at: doubleFacedCard.released_at,
    illustration_id: doubleFacedCard.card_faces[0].illustration_id,
    image_uris: doubleFacedCard.card_faces[0].image_uris,
    flavor_text: doubleFacedCard.card_faces[0].flavor_name || null,
    type_line: doubleFacedCard.type_line,
    power: doubleFacedCard.card_faces[0].power || null,
    toughness: doubleFacedCard.card_faces[0].toughness || null,
    promo: doubleFacedCard.promo,
    reprint: doubleFacedCard.reprint,
    variation: doubleFacedCard.variation,
    full_art: doubleFacedCard.full_art,
    textless: doubleFacedCard.textless,
    prints_search_uri: doubleFacedCard.prints_search_uri,
    set_name: doubleFacedCard.set_name,
    artist: doubleFacedCard.artist,
    collector_number: doubleFacedCard.collector_number,
    rarity: doubleFacedCard.rarity,
    oracle_text: doubleFacedCard.card_faces[0].oracle_text || null,
    frame: doubleFacedCard.frame,
    related_uris: doubleFacedCard.related_uris,
    all_parts: doubleFacedCard.all_parts || null,
    prices: doubleFacedCard.prices,
  };
}
