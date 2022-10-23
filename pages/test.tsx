import { GetStaticProps, NextPage } from "next";
import React from "react";
import { getAllCardsIds } from "../lib/getAllCardsIds";

const TestPage: NextPage = ({ paths }: any) => {
  console.log(paths);

  return <div>{}</div>;
};

export default TestPage;

export const getStaticProps: GetStaticProps = async () => {
  const paths = await getAllCardsIds();

  return {
    props: { paths },
  };
};
