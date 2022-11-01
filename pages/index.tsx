import Head from "next/head";
import type { NextPage } from "next";
import { Card } from "@/components/Card";
import { Header } from "@/components/common/Header";
import { loadCards } from "@/lib/loadCards";
import { TCard } from "@/types/TCard";

type HomeProps = {
  cards: TCard[];
};

const Home: NextPage<HomeProps> = ({ cards }) => {
  return (
    <>
      <Head>
        <title>The CRABS of Magic the Gathering</title>
        <meta name="description" content="🦀" />
      </Head>
      <div className="print:bg-white print:text-black">
        <Header />
        <div className="mx-5 grid grid-cols-1 gap-5 print:h-1/2 print:grid-cols-3 print:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {cards && cards?.map((card) => <Card key={card.id} card={card} />)}
        </div>
      </div>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const cards = await loadCards();

  return {
    props: { cards }, // will be passed to the page component as props
  };
}
