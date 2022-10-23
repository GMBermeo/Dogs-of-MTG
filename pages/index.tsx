import type { NextPage } from "next";
import Head from "next/head";
import { CardList } from "../components/CardList";
import { Header } from "../components/common/Header";
import { loadCards } from "../lib/loadCards";

const Home: NextPage = ({ cards }: any) => {
  return (
    <>
      <Head>
        <title>Doggos from MTG</title>
      </Head>
      <div className="print:bg-white print:text-black">
        <Header />
        <CardList cards={cards} />
      </div>
    </>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  const cards = await loadCards();

  return {
    props: { cards }, // will be passed to the page component as props
  };
}
