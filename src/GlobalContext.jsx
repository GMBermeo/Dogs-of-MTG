import React, { FC } from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  function carregarDogs() {
    fetch(
      "https://api.scryfall.com/cards/search?q=t:dog -is:digital order:released"
    )
      // fetch(
      //   "./localDogs.json"
      // )
      .then((response) => response.json())
      .then((json) => setDados(json));
  }

  React.useEffect(() => {
    carregarDogs();
  }, []);

  React.useEffect(() => {
    console.log("GlobalStorage: ", dados);
  }, [dados]);

  return (
    <GlobalContext.Provider value={{ dados, carregarDogs, setDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
