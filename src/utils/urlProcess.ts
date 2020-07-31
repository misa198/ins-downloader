const insPostRegex = new RegExp(
  "(?:(?:http|https)://)?(?:www.)?(?:instagram.com|instagr.am)/p/([A-Za-z0-9-_]+)"
);

export const processPostUrl = (url: string): string => {
  const match = url.match(insPostRegex);
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
