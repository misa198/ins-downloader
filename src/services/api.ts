import { processPostUri, processStoriesUri } from "../utils/urisProcess";
import { processPostUrl, getUsername } from "../utils/urlProcess";

import { baseUrl, requestConfigs } from "../configs/connect";

export const getHashQuery = async (): Promise<any> => {
  return fetch(baseUrl, requestConfigs)
    .then((data: Response) => data.text())
    .then((body: string) => {
      const path = body.match(/\/(static\/bundles\/.+\/Consumer\.js\/.+\.js)/);
      if (path) return path[1];
      else return "";
    })
    .then((path) => {
      if (path === "") throw new Error("Error");
      return fetch(`${baseUrl}/${path}`, requestConfigs)
        .then((res) => res.text())
        .then((data) => {
          const hashQuery = data.match(/50,[a-zA-Z]="([a-zA-Z0-9]{32})",/);

          if (!hashQuery) return "";
          else return hashQuery[1];
        });
    });
};

export const getUserId = async (username: string): Promise<any> => {
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
    return getHashQuery().then((hashQuery) => {
      return fetch(
        `${baseUrl}/graphql/query/?query_hash=${hashQuery}&variables=%7B%22reel_ids%22%3A%5B%22${userId}%22%5D%2C%22tag_names%22%3A%5B%5D%2C%22location_ids%22%3A%5B%5D%2C%22highlight_reel_ids%22%3A%5B%5D%2C%22precomposed_overlay%22%3Afalse%2C%22show_story_viewer_list%22%3Atrue%2C%22story_viewer_fetch_count%22%3A50%2C%22story_viewer_cursor%22%3A%22%22%2C%22stories_video_dash_manifest%22%3Afalse%7D`,
        requestConfigs
      )
        .then((res) => res.json())
        .then((data) => processStoriesUri(data).then((result) => result));
    });
  });
};
