import { GetStaticProps, NextPage } from "next";
import React from "react";
import { getAllCardsIds, PathParams } from "@/lib/getAllCardsIds";
import { loadCards } from "@/lib/loadCards";
import { TCard } from "@/types/TCard";

type SiteMapProps = {
  sitemapPaths: TCard[];
};

const Sitemap: NextPage<SiteMapProps> = ({ sitemapPaths }) => {
  // console.log(sitemapPaths);

  return (
    <div>
      {sitemapPaths.map((card: TCard) => (
        <p className="" key={card.id}>
          {`<url>
          <loc>https://dogs-of-mtg.bermeo.dev/card/${card.id}</loc>
            <image:image>
              <image:loc>${card.image_uris.art_crop}</image:loc>
              <image:loc>${card.image_uris.large}</image:loc>
              <image:loc>${card.image_uris.png}</image:loc>
              <image:loc>${card.image_uris.small}</image:loc>
            </image:image>
          </url>
          <url>
          <loc>https://dogs-of-mtg.bermeo.dev/en-US/card/${card.id}</loc>
            <image:image>
              <image:loc>${card.image_uris.art_crop}</image:loc>
              <image:loc>${card.image_uris.large}</image:loc>
              <image:loc>${card.image_uris.png}</image:loc>
              <image:loc>${card.image_uris.small}</image:loc>
            </image:image>
          </url>`}
        </p>
      ))}
    </div>
  );
};

export default Sitemap;

export const getStaticProps: GetStaticProps = async () => {
  const sitemapPaths: TCard[] = await loadCards();

  return {
    props: { sitemapPaths },
  };
};
