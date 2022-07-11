import React from "react";
import { GlobalStorage } from "./GlobalContext";
import Cards from "./Components/CardList";

const App = () => {
  return (
    <GlobalStorage>
      <Cards />
    </GlobalStorage>
  );
};

export default App;
