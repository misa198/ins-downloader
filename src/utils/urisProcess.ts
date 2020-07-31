import { mediumTypes } from "../types/index";

const process = async (data: any): Promise<Array<mediumTypes>> => {
  let rawData: Array<any> = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  data.graphql.shortcode_media.edge_sidecar_to_children
    ? (rawData = data.graphql.shortcode_media.edge_sidecar_to_children.edges)
    : [];

  const uris: Array<mediumTypes> = [];
  if (rawData.length !== 0) {
    rawData.forEach((ele) => {
      uris.push({
        uri: ele.node.display_resources[2].src,
        id: ele.node.id,
        is_video: ele.node.is_video,
        video_url: ele.node.video_url,
      });
    });
  } else {
    uris.push({
      uri: data.graphql.shortcode_media.display_resources[2].src,
      id: data.graphql.shortcode_media.id,
      is_video: data.graphql.shortcode_media.is_video,
      video_url: data.graphql.shortcode_media.video_url,
    });
  }

  return uris;
};

export default process;
