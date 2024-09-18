import { CSSProperties } from "react";
import { ASSET_URI } from "../../config";
import { JsonImageProperties } from "../../types/jsonDesign.types";
import { position, shadow } from "../../util/css";

function getStyle(props: Partial<JsonImageProperties>): CSSProperties {
  return {
    ...shadow(props.dropShadow),
    ...position(props),
    objectFit: "cover",
    rotate: `${props.rotation}deg`,
  };
}

export default function Image(props: Omit<JsonImageProperties, "id">) {
  return (
    <img
      style={getStyle(props)}
      alt={props.originalName}
      src={`${ASSET_URI}/${props.url}`}
    />
  );
}
