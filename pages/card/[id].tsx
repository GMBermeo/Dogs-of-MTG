/* eslint-disable @next/next/no-img-element */
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import ArtCrop from "../../components/Card/ArtCrop";
import CardTags from "../../components/Card/CardTags";
import { loadCard } from "../../lib/loadCard";
import { loadCards } from "../../lib/loadCards";
import { TCard } from "../../types/TCard";

const CardPage: NextPage = ({ card }: any) => {
  const [prints, setPrints] = React.useState([]);
  React.useEffect(() => {
    // eslint-disable-next-line prefer-const
    let allPrints = [];
    fetch(card.prints_search_uri)
      .then((response) => response.json())

      .then((json) => {
        setPrints(json.data);
      });
  }, [card?.prints_search_uri, setPrints]);
  console.log("prints", prints);
  console.log("card", card);

  if (prints.length === 1) return null;
  const quantidade = prints.length + 1;
  // const { id } = context.params!;
  // const card = context.data[id];

  // console.log("Card ID: ", card.id);

  return (
    <>
      <Head>
        <title>
          {`${card?.name} (${card?.frame})`} - The Doggos of Magic the Gathering
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
          <>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {prints.map((print: TCard) => (
                <div
                  className="mb-2 text-center text-xs font-bold"
                  key={print.id}
                >
                  <ArtCrop
                    src={print.image_uris.large}
                    large={print.image_uris.large}
                  />
                  <p>{print.set_name}</p>
                  <p>{print.released_at}</p>
                </div>
              ))}
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default CardPage;

// Generates `/posts/1` and `/posts/2`
// export async function getStaticPaths() {
export async function getStaticPaths() {
  const paths = await loadCards();

  return {
    paths,
    fallback: true, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
// export async function getStaticProps(context: any) {
//   return {
//     // Passed to the page component as props
//     props: { post: {} },
//   };
// }

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const card = await loadCard(id as string);

  return {
    props: { card },
  };
};
