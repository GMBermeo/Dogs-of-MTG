import { GetStaticProps, NextPage } from "next";
import React from "react";
import { loadCards } from "@/lib/loadCards";
import { TCard } from "@/types/TCard";

type SiteMapProps = {
  allCardsCollection: TCard[];
};

const Sitemap: NextPage<SiteMapProps> = ({ allCardsCollection }) => {
  return (
    <div className="m-16 text-xs">
      {`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
   xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`}
      {`<url>
      <loc>https://rats-of-mtg.bermeo.dev</loc>
      <image:image>
         <image:loc>https://dogs-of-mtg.bermeo.dev/Logo.svg</image:loc>
         <image:loc>https://dogs-of-mtg.bermeo.dev/icons/favicon-3000x3000.png</image:loc>
         <image:loc>https://dogs-of-mtg.bermeo.dev/icons/favicon-6000x6000.png</image:loc>
      </image:image>
   </url>`}
      {`<url>
      <loc>https://rats-of-mtg.bermeo.dev/all-prints</loc>
      <image:image>
      `}
      {allCardsCollection.map((card: TCard, index) => (
        <p key={index}>
          {`    <image:loc>${card.image_uris.art_crop}</image:loc>
                <image:loc>${card.image_uris.large}</image:loc>
                <image:loc>${card.image_uris.png}</image:loc>
                <image:loc>${card.image_uris.small}</image:loc>`}
        </p>
      ))}
      {`</image:image>
   </url>`}
      {`<url>
      <loc>https://rats-of-mtg.bermeo.dev/en/all-prints</loc>
      <image:image>
      `}
      {allCardsCollection.map((card: TCard, index) => (
        <p key={index}>
          {`    <image:loc>${card.image_uris.art_crop}</image:loc>
                <image:loc>${card.image_uris.large}</image:loc>
                <image:loc>${card.image_uris.png}</image:loc>
                <image:loc>${card.image_uris.small}</image:loc>`}
        </p>
      ))}
      {`</image:image>
   </url>`}
      {allCardsCollection.map((card: TCard, index) => (
        <p key={index}>
          {`<url>
          <loc>https://rats-of-mtg.bermeo.dev/card/${card.id}</loc>
            <image:image>
              <image:loc>${card.image_uris.art_crop}</image:loc>
              <image:loc>${card.image_uris.large}</image:loc>
              <image:loc>${card.image_uris.png}</image:loc>
              <image:loc>${card.image_uris.small}</image:loc>
            </image:image>
          </url>
          <url>
          <loc>https://rats-of-mtg.bermeo.dev/en/card/${card.id}</loc>
            <image:image>
              <image:loc>${card.image_uris.art_crop}</image:loc>
              <image:loc>${card.image_uris.large}</image:loc>
              <image:loc>${card.image_uris.png}</image:loc>
              <image:loc>${card.image_uris.small}</image:loc>
            </image:image>
          </url>`}
        </p>
      ))}
      {`</urlset>`}
    </div>
  );
};

export default Sitemap;

export const getStaticProps: GetStaticProps = async () => {
  const allCardsCollection = await loadCards("prints");

  return {
    props: { allCardsCollection },
  };
};
