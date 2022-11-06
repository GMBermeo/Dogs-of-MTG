import { GetStaticProps, NextPage } from "next";
import React from "react";
import { getAllCardsIds, PathParams } from "@/lib/getAllCardsIds";

const TestPage: NextPage = ({ paths }: any) => {
  console.log(paths);

  return (
    <div>
      {paths.map((path: PathParams) => (
        <p className="" key={path.params.id}>
          {`<url><loc>https://dogs-of-mtg.bermeo.dev/card/${path.params.id}</loc><loc>https://dogs-of-mtg.bermeo.dev/card/en-US/${path.params.id}</loc></url>`}
        </p>
      ))}
    </div>
  );
};

export default TestPage;

export const getStaticProps: GetStaticProps = async () => {
  const paths = await getAllCardsIds();

  return {
    props: { paths },
  };
};
