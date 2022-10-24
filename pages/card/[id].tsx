/* eslint-disable @next/next/no-img-element */
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import CardTags from "../../components/Card/CardTags";
import { getAllCardsIds } from "../../lib/getAllCardsIds";
import { loadCard } from "../../lib/loadCard";
import { loadCardPrints } from "../../lib/loadCardPrints";
import { TCard } from "../../types/TCard";

const CardPage: NextPage = ({ card, prints }: any) => {
  // console.log(prints);

  return (
    <>
      <Head>
        <title>
          {`${card?.name} (${card?.frame}) - The Doggos of Magic the Gathering`}
        </title>
        <meta
          name="description"
          content={
            card.flavor_text
              ? `${card.flavor_text}. Painted by ${card.artist} (${card.frame})`
              : `${card.name} - ${card.set_name}. Painted by ${card.artist} (${card.frame})`
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
              Total prints: {prints?.length}
            </div>

            <div className="flex gap-x-4">
              <CardTags
                full_art={card.full_art}
                promo={card.promo}
                reprint={card.reprint}
                variation={card.variation}
                frame={card.frame}
                prints={prints?.length}
              />
            </div>
          </div>
          <a href={card.image_uris.art_crop ?? ""}>
            <img
              className="my-4 min-w-full rounded"
              src={card.image_uris.art_crop ?? card.image_uris.large}
              alt={card.name}
            />
          </a>
          <div className="flex justify-between font-bold">
            <div className="whitespace-pre-line">{card.type_line}</div>
            <div>{card.set_name}</div>
          </div>
          <div className="p-4 text-lg">
            <p className="mb-2 text-sm text-slate-300">{card.oracle_text}</p>
            <p className="italic">{card.flavor_text ?? ""}</p>
          </div>

          <div className="mb-4 flex justify-between">
            <div className="my-auto flex flex-col text-sm font-semibold">
              <div>{card?.collector_number}</div>
              <div>{card.artist}</div>
            </div>
            {card.power && (
              <div className="rounded-xl border border-white p-4 text-3xl">
                {card.power} / {card.toughness}
              </div>
            )}
          </div>
          {prints && (
            <>
              <h2 className="mb-2 text-xl font-bold">Other Prints</h2>
              <div className="grid grid-cols-3 gap-4">
                {prints.map((print: TCard) => (
                  <div
                    className="mb-2 text-center text-xs font-bold"
                    key={print.id}
                  >
                    <div>
                      <a href={print.image_uris.large ?? ""}>
                        <img
                          className="mb-1 rounded-xl"
                          src={print.image_uris.large}
                          alt={`${print.name} from ${print.set_name} painted by ${print.artist}`}
                        />
                      </a>
                      <a href={print.related_uris.gatherer ?? ""}>
                        <p>{print.set_name}</p>
                        <p>{print.released_at}</p>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CardPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params!;
  const card = await loadCard(id as string);
  const printsResponse: TCard[] = await loadCardPrints(card.prints_search_uri);
  const stringifiedPrints = JSON.stringify(printsResponse);
  const trimmedPrints = stringifiedPrints?.trim() || "";
  const prints: TCard[] = await JSON.parse(trimmedPrints);
  // printsResponse !== undefined
  //   ? JSON.parse(JSON.stringify(printsResponse))
  //   : undefined;

  return {
    props: { card, prints },
  };
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = await getAllCardsIds();
  // const postList: PostData[] = await GetPosts()
  return {
    paths: paths,
    fallback: true,
  };
};
