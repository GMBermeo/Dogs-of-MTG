/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Header = () => {
  return (
    <a href="">
      <h1 className="m-5 inline-flex items-center text-center text-3xl font-semibold print:hidden md:text-left">
        <img src="/favicon.svg" className="mr-2 h-12 rounded-full" alt="Logo" />
        The Doggos of
        <span className="font-mtg ml-2 self-end text-4xl">
          Magic the Gathering
        </span>
      </h1>
    </a>
  );
};
