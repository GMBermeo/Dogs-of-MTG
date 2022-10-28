# The Dogs of Magic the Gathering

<img width="64px" style="float:right; transform: scaleX(-1)" src="https://dogs-of-mtg.bermeo.dev/Logo.svg" alt="Logo"/>

This is an auxiliary tool that lists every Magic the Gathering card with the type "dog" or "hound".

## features

* Change the fetch request on `GlobalContext.jsx` to easily change the listed cards.
* It uses some `print:` classes from the Tailwind CSS to print better proxies and use less ink.
* If the card has Full Art, Promo, Reprint, or Variation prints available it shows a tag on the upper right side.
 
## made with

![React](https://img.shields.io/badge/react-%230d1117.svg?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%230d1117?style=for-the-badge&logo=tailwindcss)
![Javascript](https://img.shields.io/badge/javascript-%230d1117.svg?style=for-the-badge&logo=javascript)
![Vite](https://img.shields.io/badge/vite-%230d1117.svg?style=for-the-badge&logo=vite&logoColor=%23646CFF)
![Deployed on Vercel](https://img.shields.io/badge/vercel-%230d1117.svg?style=for-the-badge&logo=vercel)

## project setup

``` sh
yarn install
```

### compiles and hot-reloads for development

``` sh
yarn dev
```

### compiles and minifies for production

``` sh
yarn build
```

## known issues

* [Release the Dogs (Jumpstart)](https://gatherer.wizards.com/Pages/Card/Details.aspx?name=Release+the+Dogs) is not included, but can be included with a secondary fetch.
* Tokens are not included.

## data source

* [Scryfall API](https://scryfall.com/docs/api)