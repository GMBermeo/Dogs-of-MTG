/* eslint-disable @next/next/no-img-element */
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import CardTags from "../../components/Card/CardTags";
import { getAllCardsIds } from "../../lib/getAllCardsIds";
import { loadCard } from "../../lib/loadCard";
import { loadCardPrints } from "../../lib/loadCardPrints";
import { TCard } from "../../types/TCard";

interface PageProps {
  card: TCard;
  prints: TCard[];
}

const CardPage: NextPage = ({ card, prints }: any) => {
  if (prints.length === 1) return null;
  const quantidade = prints.length + 1;
  // const { id } = context.params!;
  // const card = context[id];

  // console.log("Card ID: ", card.id);

  return (
    <>
      <Head>
        <title>
          {`${card.name} (${card.frame})`} - The Doggos of Magic the Gathering
        </title>
        <meta
          name="description"
          content={
            card.flavor_text
              ? card.flavor_text
              : `${card.name} - ${card.set_name} (${card?.frame})`
          }
        />
      </Head>
      <div className="mx-auto mt-4 max-w-2xl rounded-lg">
        <div className="row-end-auto m-0 rounded-lg bg-[#00000022] p-6 shadow-2xl shadow-orange-600/5 print:block print:rounded-none print:bg-transparent print:p-0 print:shadow-none">
          <div className="flex justify-between ">
            <h1 className="text-2xl font-medium">{card.name}</h1>
            <div className="my-auto text-sm font-medium">
              {card.released_at}
            </div>
            <div className="my-auto text-sm font-medium">
              Total prints: {prints.length}
            </div>

            <div className="flex gap-x-4">
              <CardTags
                full_art={card.full_art}
                promo={card.promo}
                reprint={card.reprint}
                variation={card.variation}
                frame={card.frame}
                prints={prints.length}
              />
            </div>
          </div>
          <img
            className="my-4 rounded"
            src={
              card.image_uris.art_crop
                ? card.image_uris.art_crop
                : card.image_uris.large
            }
            alt={card.name}
          />
          <div className="flex justify-between font-bold">
            <div className="whitespace-pre-line">{card.type_line}</div>
            <div>{card.set_name}</div>
          </div>
          <div className="p-4 text-lg">
            <p>{card.oracle_text}</p>
            <p className="italic">{card.flavor_text}</p>
          </div>

          <div className="flex justify-between">
            <div></div>
            {card.power && (
              <div className="rounded-xl border border-white p-4 text-3xl">
                {card.power} / {card.toughness}
              </div>
            )}
          </div>

          <h2 className="mb-2 text-xl font-bold">Other Prints</h2>
          <div className="grid grid-cols-3 gap-4">
            {prints.map((print: TCard) => (
              <a
                href={`/card/${print.id}`}
                className="mb-2 text-center text-xs font-bold"
                key={print.id}
              >
                <div>
                  <img
                    className="rounded-xl"
                    src={print.image_uris.large}
                    alt={print.name}
                  />
                  <p>{print.set_name}</p>
                  <p>{print.released_at}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const card = await loadCard(id as string);
  const prints = await loadCardPrints(card.prints_search_uri);

  return {
    props: { card, prints },
  };
};

// Generates `/posts/1` and `/posts/2`
// export async function getStaticPaths() {
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllCardsIds();

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  };
};
