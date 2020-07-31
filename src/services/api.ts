import urisProcess from "../utils/urisProcess";
import { processPostUrl } from "../utils/urlProcess";

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
  return (fetch(`${baseUrl}/${username}?__a=1`))
  .then(res => res.json())
  .then(data => data.graphql.user.id);
};

export const getPost = async (url: string): Promise<any> => {
  const graphqlUrl = processPostUrl(url);

  return fetch(graphqlUrl, requestConfigs)
    .then((res) => res.json())
    .then((data) => urisProcess(data).then((result) => result));
};

export const getStory = async (url: string): Promise<any> => {
  
};
