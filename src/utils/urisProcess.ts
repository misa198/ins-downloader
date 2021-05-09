import { MediumTypes } from "../App";

export const processPostUri = async (
  data: any
): Promise<Array<MediumTypes>> => {
  let rawData: Array<any> = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  data.graphql.shortcode_media.edge_sidecar_to_children
    ? (rawData = data.graphql.shortcode_media.edge_sidecar_to_children.edges)
    : [];

  const uris: Array<MediumTypes> = [];
  if (rawData.length !== 0) {
    rawData.forEach((ele) => {
      uris.push({
        uri:
          ele.node.display_resources[ele.node.display_resources.length - 1].src,
        id: ele.node.id,
        is_video: ele.node.is_video,
        video_url: ele.node.video_url,
      });
    });
  } else {
    uris.push({
      uri:
        data.graphql.shortcode_media.display_resources[
          data.graphql.shortcode_media.display_resources.length - 1
        ].src,
      id: data.graphql.shortcode_media.id,
      is_video: data.graphql.shortcode_media.is_video,
      video_url: data.graphql.shortcode_media.video_url,
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
