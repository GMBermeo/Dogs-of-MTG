import Head from "next/head";
import type { NextPage } from "next";
import { Card } from "@/components/Card";
import { TList } from "@/types/TList";
import { Header } from "@/components/common/Header";
import { loadCards } from "@/lib/loadCards";

type HomeProps = {
  cards: TList;
};

const Home: NextPage<HomeProps> = ({ cards }) => {
  return (
    <>
      <Head>
        <title>The Doggos of Magic the Gathering ⽝</title>
        <meta
          name="description"
          content="'If you're starving, eat your horses, your dead, or yourself—but NEVER eat your dog.' —General Jarkeld, the Arctic Fox. 🐾 This tool was developed using the Static Site Generation (SSG) concept with Next.js in order to index all the dog type cards of the Magic The Gathering for a private collection. 🐶 The source code can be found on github and easily changed to any other parameter."
        />
      </Head>
      <div className="print:bg-white print:text-black">
        <Header />
        <div className="mx-5 grid grid-cols-1 gap-5 print:h-1/2 print:grid-cols-3 print:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {cards &&
            cards?.data.map((card) => <Card key={card.id} card={card} />)}
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
