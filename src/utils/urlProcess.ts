import { urlPostRegex } from '../constants/regex';

export const processPostUrl = (url: string): string => {
  const match = url.match(urlPostRegex);
  if (match) {
    return `${match[0]}?__a=1`;
  } else return "";
};

export const getUsername = (url: string): string => {
  return url.split("/")[4];
};

export const getStoryId = (url: string): string => {
  return url.split("/")[5];
};
