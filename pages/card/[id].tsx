import React from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { CardTags } from "@/components/Card/CardTags";
import { getAllCardsIds } from "@/lib/getAllCardsIds";
import { loadCard } from "@/lib/loadCard";
import { loadCardPrints } from "@/lib/loadCardPrints";
import { TCard } from "@/types/TCard";
import { PaintBrushIcon } from "@heroicons/react/20/solid";

type CardPageProps = {
  card: TCard;
  prints: TCard[];
};

const CardPage: NextPage<CardPageProps> = ({ card, prints }) => {
  // console.log(prints);
  const quantidade = prints?.length;

  const columns =
    quantidade == 1 || quantidade == 2 || quantidade == 3
      ? `grid-cols-${quantidade}`
      : quantidade % 2 == 0 && quantidade % 3 != 0
      ? "grid-cols-4"
      : "grid-cols-3";

  return (
    <>
      <Head>
        <title>
          {`${card?.name} (${card?.released_at}) - The Dogs of Magic the Gathering`}
        </title>
        <meta
          name="description"
          content={
            card?.flavor_text
              ? `${card?.flavor_text}. Painted by ${card?.artist} (${card?.released_at})`
              : `${card?.name} - ${card?.set_name}. Painted by ${card?.artist} (${card?.released_at})`
          }
        />
      </Head>
      <div className="mx-auto mb-2 max-w-2xl md:mt-4">
        <div className="row-end-auto m-0 rounded-none bg-[#00000022] p-6 shadow-2xl shadow-orange-600/5 print:block print:rounded-none print:bg-transparent print:p-0 print:shadow-none md:rounded-lg">
          <div className="flex justify-between ">
            <h1 className="text-2xl font-medium">{card?.name}</h1>
            <div className="my-auto text-sm font-medium">
              {card?.released_at}
            </div>
            <div className="my-auto hidden text-sm font-medium md:block">
              Total prints: {prints?.length}
            </div>

            <div className="flex gap-x-4">
              <CardTags
                full_art={card?.full_art}
                promo={card?.promo}
                reprint={card?.reprint}
                variation={card?.variation}
                frame={card?.released_at}
              />
            </div>
          </div>
          <Link href={card?.image_uris.art_crop ?? ""}>
            <Image
              className="my-4 min-w-full rounded"
              src={card?.image_uris.art_crop ?? card?.image_uris.large}
              alt={card?.name}
              width={624}
              height={455.5}
              priority
              placeholder="blur"
              blurDataURL={card?.image_uris.art_crop}
            />
          </Link>
          <div className="flex justify-between font-bold">
            <h2 className="whitespace-pre-line">{card?.type_line}</h2>
            <h3>{card?.set_name}</h3>
          </div>
          <div className="p-4 text-lg">
            <p className="mb-2 text-sm text-slate-300">{card?.oracle_text}</p>
            <p
              className="italic"
              dangerouslySetInnerHTML={{
                __html: card?.flavor_text ?? "",
              }}
            />
          </div>

          <div className="mb-4 flex justify-between">
            <div className="flex flex-col justify-evenly text-sm font-semibold">
              <div>#{card?.collector_number}</div>
              <div className="flex">
                <PaintBrushIcon className="my-auto mr-1 h-4 w-4 text-white" />
                <h4>{card?.artist}</h4>
              </div>
            </div>
            {card?.power && (
              <div className="rounded-xl border border-white p-4 text-3xl">
                {card?.power} / {card?.toughness}
              </div>
            )}
          </div>
          {prints && (
            <section>
              <h5 className="mb-2 text-2xl">Prints</h5>
              <div className={`grid gap-4 ${columns}`}>
                {prints.map((print: TCard) => (
                  <div
                    className="mb-2 text-center text-xs font-bold"
                    key={print.id}
                  >
                    <div>
                      <Link href={print.image_uris.large}>
                        <Image
                          className="mb-1"
                          src={print.image_uris.png}
                          alt={`${print.name} from ${print.set_name} painted by ${print.artist}`}
                          width={672}
                          height={936}
                          blurDataURL={print.image_uris.small}
                          placeholder="blur"
                        />
                      </Link>
                      <Link href={print.related_uris.gatherer ?? ""}>
                        <h6>{print.set_name}</h6>
                        <p>{print.released_at}</p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
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
  const printsResponse: TCard[] = await loadCardPrints(card?.prints_search_uri);
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
