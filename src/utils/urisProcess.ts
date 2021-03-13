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

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  data.data.reels_media.length !== 0
    ? (rawData = data.data.reels_media[0].items)
    : [];

  const uris: Array<MediumTypes> = [];
  if (rawData.length !== 0) {
    rawData.forEach((ele) => {
      ele.is_video
        ? uris.push({
            uri: ele.display_resources[ele.display_resources.length - 1].src,
            id: ele.id,
            is_video: ele.is_video,
            video_url: ele.video_resources[ele.video_resources.length - 1].src,
          })
        : uris.push({
            uri: ele.display_resources[ele.display_resources.length - 1].src,
            id: ele.id,
            is_video: ele.is_video,
            video_url: undefined,
          });
    });
  }

  return uris;
};
