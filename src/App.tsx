/// <reference types="chrome"/>
import React, { useEffect, useState } from "react";

import AppStyled from "./styled";

import Header from "./components/Header/index";

import Error from "./views/Error/index";
import Media from "./views/Media/index";
import Loading from "./views/Loading/index";

import { getPost, getStory } from "./services/api";

import { urlPostRegex, urlStoryRegex } from "./constants/regex";

export interface MediumTypes {
  uri: string;
  id: string;
  is_video: boolean;
  video_url: string | undefined;
}

const App: React.FC = () => {
  const [media, setMedia] = useState<MediumTypes[]>();
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
    <AppStyled>
      <Header />
      {!error && !media && <Loading />}
      {error && <Error />}
      {media && !error && <Media media={media} />}
    </AppStyled>
  );
};

export default App;
