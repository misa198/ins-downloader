import React, { useEffect } from "react";

import callApi from "./services/api";

import "./App.scss";

const App: React.FC = () => {
  useEffect(() => {
    callApi()
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div className="App">
    This is app
  </div>;
};

export default App;
