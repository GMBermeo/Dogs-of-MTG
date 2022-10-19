import React, { FC } from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  function carregarDogs() {
    // try {
    // code that we will 'try' to run
    fetch(
      "https://api.scryfall.com/cards/search?q=t:dog -is:digital order:released"
    )
      .then((response) => response.json())
      .then((json) => setDados(json));
    //   console.log("Dogs api carregados", data);
    // } catch (error) {
    // code to run if there are any problems
    // fetch("./localDogs.json")
    //   .then((response) => response.json())
    //   .then((json) => setDados(json));
    // console.log("Dogs local carregados");
    // }
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
