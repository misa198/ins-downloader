const callApi = async (): Promise<any> => {
  return fetch("https://www.instagram.com/p/CDOeRrgjkQz/?__a=1", {
    headers: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "vi,en;q=0.9,en-GB;q=0.8,en-US;q=0.7",
      "cache-control": "max-age=0",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "none",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
    },
    referrerPolicy: "no-referrer-when-downgrade",
    body: null,
    method: "GET",
    mode: "cors",
    credentials: "include",
  });
};

export default callApi;
