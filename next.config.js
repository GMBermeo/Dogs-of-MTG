/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["cards.scryfall.io"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",

    domains: [
      {
        // Note: subdomains must be included in the domain value to be matched
        // e.g. www.example.com should be used if that is the expected hostname
        domain: "zombies-of-mtg.bermeo.dev",
        defaultLocale: "en",
      },
    ],
  },
};

module.exports = nextConfig;
