/// <reference types="chrome"/>
import React, { useEffect, useState } from "react";

// Components
import Header from "./components/Header/index";

// Containers
import Error from "./containers/Error/index";
import Media from "./containers/Media/index";
import Loading from "./containers/Loading/index";

// Services
import { getPost, getStory } from "./services/api";

import { mediumTypes } from "./types/index";

import { urlPostRegex, urlStoryRegex } from "./configs/regex";

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
        } else if (url.match(urlPostRegex)) {
          getPost(url)
            .then((data) => setMedia(data))
            .catch(() => setError(true));
        } else if (url.match(urlStoryRegex)) {
          getStory(url)
            .then((data) => setMedia(data))
            .catch(() => setError(true));
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
