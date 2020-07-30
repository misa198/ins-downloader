import React, { useEffect, useState } from "react";

// Components
import Header from "./components/Header/index";

// Containers
import Error from "./containers/Error/index";
import Images from "./containers/Images/index";

// Services
import callApi from "./services/api";

import process from "./utils/process";

import { imageType } from './types/index';

// Styles
import "./styles/App.scss";

const App: React.FC = () => {
  const [images, setImages] = useState<imageType[]>();
  const [error, setError] = useState(false);

  useEffect(() => {
    callApi()
      .then((res) => res.json())
      .then((data) => {
        process(data)
          .then((result) => setImages(result))
          .catch(() => setError(true));
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      {
        error && <Error />
      }
      {
        (images && !error) && <Images images={images} />
      }
    </div>
  );
};

export default App;
