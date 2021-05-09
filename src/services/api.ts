import { processPostUri, processStoriesUri } from "../utils/urisProcess";
import { processPostUrl, getUsername } from "../utils/urlProcess";

import { baseUrl, imageApiUrl, requestConfigs } from "../constants/connect";

export const getAppId = async (): Promise<string> => {
  return fetch(baseUrl, requestConfigs)
    .then((data: Response) => data.text())
    .then((body: string) => {
      const path = body.match(
        /\/(static\/bundles\/.+\/ConsumerLibCommons\.js\/.+\.js)/
      );
      if (path) return path[1];
      else return "";
    })
    .then((path) => {
      if (path === "") throw new Error("Error");
      return fetch(`${baseUrl}/${path}`, requestConfigs)
        .then((res) => res.text())
        .then((data) => {
          const appId = data.match(
            /,e.instagramWebDesktopFBAppId='([0-9]{15})',/
          );
          if (!appId) return "";
          else return appId[1];
        });
    });
};

export const getUserId = async (username: string): Promise<string> => {
  return fetch(`${baseUrl}/${username}?__a=1`)
    .then((res) => res.json())
    .then((data) => data.graphql.user.id);
};

export const getPost = async (url: string): Promise<any> => {
  const graphqlUrl = processPostUrl(url);

  return fetch(graphqlUrl, requestConfigs)
    .then((res) => res.json())
    .then((data) => processPostUri(data).then((result) => result));
};

export const getStory = async (url: string): Promise<any> => {
  const username = getUsername(url);

  return getUserId(username).then((userId) => {
    if (!userId) throw new Error("Invalid username");
    return getAppId().then((appId) => {
      return fetch(`${imageApiUrl}/v1/feed/reels_media/?reel_ids=${userId}`, {
        headers: {
          accept: "*/*",
          "accept-language": "vi,en;q=0.9",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "x-ig-app-id": appId,
        },
        referrer: "https://www.instagram.com/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => processStoriesUri(data).then((result) => result));
    });
  });
};
