import { MediumTypes } from "../App";

export const processPostUri = async (
  data: any
): Promise<Array<MediumTypes>> => {
  const uris: Array<MediumTypes> = [];

  if (data.items[0].carousel_media) {
    const rawData = data.items[0].carousel_media;
    rawData.forEach((ele: any) => {
      if (ele.video_versions) {
        uris.push({
          uri: "",
          id: ele.id,
          is_video: true,
          video_url: ele.video_versions[0].url,
        });
      } else {
        uris.push({
          uri: ele.image_versions2.candidates[0].url,
          id: ele.id,
          is_video: false,
          video_url: "",
        });
      }
    });
  } else if (data.items[0].video_versions) {
    uris.push({
      uri: "",
      id: data.items[0].id,
      is_video: true,
      video_url: data.items[0].video_versions[0].url,
    });
  } else {
    uris.push({
      uri: data.items[0].image_versions2.candidates[0].url,
      id: data.items[0].id,
      is_video: false,
      video_url: "",
    });
  }

  return uris;
};

export const processStoriesUri = async (
  data: any
): Promise<Array<MediumTypes>> => {
  let rawData: Array<any> = [];
  const uris: Array<MediumTypes> = [];

  rawData = data.reels_media[0].items;

  if (rawData.length !== 0) {
    rawData.forEach((ele) => {
      if (ele.video_versions) {
        const video = ele.video_versions[0];
        uris.push({
          uri: ele.image_versions2.candidates[0].url,
          id: ele.id,
          is_video: true,
          video_url: video.url,
        });
      } else {
        uris.push({
          uri: ele.image_versions2.candidates[0].url,
          id: ele.id,
          is_video: false,
          video_url: undefined,
        });
      }
    });
  }

  return uris;
};
