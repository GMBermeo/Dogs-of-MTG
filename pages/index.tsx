import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="container mx-auto text-center">
        <main>
          <h1 className="my-8 text-3xl font-bold underline">Hello world!</h1>
          <h2 className="text-5xl">
            Tailwind is <span className=" text-green-500">working</span>!
          </h2>
        </main>
      </div>
    </>
  );
};

export default Home;
