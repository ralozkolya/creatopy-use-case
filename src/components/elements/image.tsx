import { css } from "@emotion/react";
import { ASSET_URI } from "../../config";
import { JsonImageProperties } from "../../types/jsonDesign.types";
import { position, shadow } from "../../util/css";

function getStyle(props: Partial<JsonImageProperties>) {
  return css({
    ...position(props),
    ...shadow(props.dropShadow),
    objectFit: "cover",
    rotate: `${props.rotation}deg`,
  });
}

export default function Image(props: Omit<JsonImageProperties, "id">) {
  return (
    <img
      css={getStyle(props)}
      alt={props.originalName}
      src={`${ASSET_URI}/${props.url}`}
    />
  );
}
