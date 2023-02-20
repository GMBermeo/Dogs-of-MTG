import Head from "next/head";
import type { NextPage } from "next";
import { Card } from "@/components/Card";
import { Header } from "@/components/common/Header";
import { loadCards } from "@/lib/loadCards";
import { TCard } from "@/types/TCard";
import { useCallback, useEffect, useState } from "react";

type HomeProps = {
  cardCollection: TCard[];
  page: number;
};

const Home: NextPage<HomeProps> = ({ cardCollection }) => {
  const [state, setState] = useState({
    cards: cardCollection.slice(0, 12),
    hasMore: true,
  });

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      !state.hasMore
    ) {
      setState((prevState) => ({
        ...prevState,
        cards: cardCollection.slice(0, prevState.cards.length + 6),
        hasMore: prevState.cards.length + 6 < cardCollection.length,
      }));
    }
  }, [cardCollection, state.hasMore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return (
    <>
      <Head>
        <title>The Zombies of Magic the Gathering</title>
        <meta
          name="description"
          content="'Feeding a normal army is a problem of logistics. With zombies, it is an asset. Feeding is why they fight. Feeding is why they are feared.' —Jadar, ghoulcaller of Nephalia. This is a tool to catalog all Zombie cards from Magic The Gathering"
        />

        <meta
          property="og:title"
          content="The Zombies of Magic the Gathering"
        />
        <meta
          property="og:description"
          content="'Feeding a normal army is a problem of logistics. With zombies, it is an asset. Feeding is why they fight. Feeding is why they are feared.' —Jadar, ghoulcaller of Nephalia. This is a tool to catalog all Zombie cards from Magic The Gathering"
        />
        <meta
          property="og:image"
          content={"https://dogs-of-mtg.bermeo.dev/icons/favicon-3000x3000.png"}
        />
        <meta property="og:image:width" content="3000" />
        <meta property="og:image:height" content="3000" />
        <meta property="og:url" content="https://zombies-of-mtg.bermeo.dev/" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <div className="print:bg-white print:text-black">
        <Header />
        <div className="mx-5 grid grid-cols-2 gap-5 print:h-1/2 print:grid-cols-3 print:grid-rows-2 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
          {state.cards &&
            state.cards?.map((card, index) => (
              <Card key={card.illustration_id} card={card} index={index} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const cardCollection = await loadCards("art");
  const page = 1;

  return {
    props: { cardCollection, page }, // will be passed to the page component as props
  };
}
