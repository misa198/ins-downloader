import { imageType } from '../types/index';

const process = async (
  data: any
): Promise<Array<imageType>> => {
  let rawData: Array<any> = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  data.graphql.shortcode_media.edge_sidecar_to_children
    ? (rawData = data.graphql.shortcode_media.edge_sidecar_to_children.edges)
    : [];

  const uris: Array<imageType> = [];
  if (rawData.length !== 0) {
    rawData.forEach((ele) => {
      uris.push({
        uri: ele.node.display_resources[2].src,
        id: ele.node.id,
      });
    });
  } else {
    uris.push({
      uri: data.graphql.shortcode_media.display_resources[2].src,
      id: data.graphql.shortcode_media.id,
    });
  }

  return uris;
};

export default process;
