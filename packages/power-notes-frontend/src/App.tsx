import React from "react";
import "./App.css";
import { HomePage } from "./home-page/HomePage";
import { PersistentLeftMenu } from "./navigation-components/PersistentLeftMenu";

function App() {
  return (
    <React.Fragment>
      <PersistentLeftMenu />
      <HomePage />
    </React.Fragment>
  );
}

export default App;
