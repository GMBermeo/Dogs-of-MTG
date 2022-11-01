import Link from "next/link";
import React from "react";
import Image from "next/image";

export const Header = () => {
  return (
    <Link href="">
      <h1 className="m-5 inline-flex items-center text-center text-sm font-semibold print:hidden md:text-left md:text-3xl">
        <Image
          src="/Logo.svg"
          className="mr-2"
          alt="Logo"
          width={48}
          height={48}
          priority
        />
        The Dogs of
        <span className="font-mtg my-auto ml-2 self-end text-xl md:mt-auto md:mb-0 md:text-4xl">
          Magic the Gathering
        </span>
      </h1>
    </Link>
  );
};
