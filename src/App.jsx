import React from "react";
import { GlobalStorage } from "./GlobalContext";
import Cards from "./Components/Cards";

const App = () => {
  return (
    <GlobalStorage>
      <Cards />
    </GlobalStorage>
  );
};

export default App;
