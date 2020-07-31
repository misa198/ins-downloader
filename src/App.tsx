/// <reference types="chrome"/>
import React, { useEffect, useState } from "react";

// Components
import Header from "./components/Header/index";

// Containers
import Error from "./containers/Error/index";
import Media from "./containers/Media/index";
import Loading from "./containers/Loading/index";

// Services
import callApi from "./services/api";

import urisProcess from "./utils/urisProcess";
import urlProcess from "./utils/urlProcess";

import { mediumTypes } from "./types/index";

// Styles
import "./styles/App.scss";

const App: React.FC = () => {
  const [media, setMedia] = useState<mediumTypes[]>();
  const [error, setError] = useState(false);

  useEffect(() => {
    chrome.tabs.query(
      {
        active: true,
        lastFocusedWindow: true,
      },
      function (tabs) {
        let url = tabs[0].url;

        if (!url) {
          setError(true);
        } else {
          const graphUrl = urlProcess(url);
          callApi(graphUrl)
            .then((res) => res.json())
            .then((data) => {
              urisProcess(data)
                .then((result) => setMedia(result))
                .catch(() => setError(true));
            })
            .catch(() => {
              setError(true);
            });
        }
      }
    );
  }, []);

  return (
    <div className="App">
      <Header />
      {!error && !media && <Loading />}
      {error && <Error />}
      {media && !error && <Media media={media} />}
    </div>
  );
};

export default App;
