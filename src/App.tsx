import React, { useEffect } from "react";

import Header from './components/Header';

import callApi from "./services/api";

import "./styles/App.scss";

const App: React.FC = () => {
  useEffect(() => {
    callApi()
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div className="App">
    <Header />
  </div>;
};

export default App;
