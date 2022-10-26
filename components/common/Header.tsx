/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Header = () => {
  return (
    <a href="">
      <h1 className="m-5 inline-flex items-center text-center text-sm font-semibold print:hidden md:text-left md:text-3xl">
        <img src="/favicon.svg" className="mr-2 h-12 rounded-full" alt="Logo" />
        The Doggos of
        <span className="font-mtg my-auto ml-2 self-end text-xl md:mt-auto md:mb-0 md:text-4xl">
          Magic the Gathering
        </span>
      </h1>
    </a>
  );
};
