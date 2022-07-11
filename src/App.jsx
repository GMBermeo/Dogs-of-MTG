import React from "react";
import { GlobalStorage } from "./GlobalContext";
import CardList from "./Components/CardList";

const App = () => {
  return (
    <GlobalStorage>
      <CardList />
    </GlobalStorage>
  );
};

export default App;
