import Head from "next/head";
import type { NextPage } from "next";
import { Card } from "@/components/Card";
import { Header } from "@/components/common/Header";
import { loadCards } from "@/lib/loadCards";
import { TCard } from "@/types/TCard";

type HomeProps = {
  cardCollection: TCard[];
};

const Home: NextPage<HomeProps> = ({ cardCollection }) => {
  return (
    <>
      <Head>
        <title>The Dogs of Magic the Gathering - All Prints</title>
        <meta
          name="description"
          content="'If you're starving, eat your horses, your dead, or yourself—but NEVER eat your dog.' —General Jarkeld, the Arctic Fox. 🐾 This tool was developed using the Static Site Generation (SSG) concept with Next.js in order to index all the dog type cards of the Magic The Gathering for a private collection. 🐶 The source code can be found on github and easily changed to any other parameter."
        />

        <meta property="og:title" content="The Dogs of Magic the Gathering" />
        <meta
          property="og:description"
          content="'If you're starving, eat your horses, your dead, or yourself—but NEVER eat your dog.' —General Jarkeld, the Arctic Fox. 🐾 This tool was developed using the Static Site Generation (SSG) concept with Next.js in order to index all the dog type cards of the Magic The Gathering for a private collection. 🐶 The source code can be found on github and easily changed to any other parameter."
        />
        <meta
          property="og:image"
          content={
            "https://lands-of-mtg.bermeo.dev/icons/favicon-3000x3000.png"
          }
        />
        <meta property="og:image:width" content="3000" />
        <meta property="og:image:height" content="3000" />
        <meta property="og:url" content="https://lands-of-mtg.bermeo.dev/" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <div className="print:bg-white print:text-black">
        <Header />
        <div className="mx-5 grid grid-cols-2 gap-5 print:h-1/2 print:grid-cols-3 print:grid-rows-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {cardCollection &&
            cardCollection?.map((card, index) => (
              <Card key={card.illustration_id} card={card} index={index} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const cardCollection = await loadCards("prints");

  return {
    props: { cardCollection }, // will be passed to the page component as props
  };
}
