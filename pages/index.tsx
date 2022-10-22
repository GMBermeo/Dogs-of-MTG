import type { NextPage } from "next";
import Head from "next/head";
import { CardList } from "../components/CardList";
import { getAllCardsIds } from "../lib/getAllCardsIds";
import { loadCards } from "../lib/loadCards";

const Home: NextPage = ({ cards }: any) => {
  console.log("getAllCardsIds()", getAllCardsIds());
  return (
    <>
      <Head>
        <title>Doggos from MTG</title>
      </Head>
      <CardList cards={cards} />
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
