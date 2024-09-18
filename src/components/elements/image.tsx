import { CSSProperties } from "react";
import { ASSET_URI } from "../../config";
import { JsonImageProperties } from "../../types/jsonDesign.types";
import { shadow } from "../../util/css";

const getStyle = (props: Partial<JsonImageProperties>): CSSProperties => ({
  ...shadow(props.dropShadow),
  width: props.width,
  height: props.height,
  position: "absolute",
  top: props.y,
  left: props.x,
  objectFit: "cover",
  rotate: `${props.rotation}deg`,
});

export default function Image(props: Omit<JsonImageProperties, "id">) {
  return (
    <img
      style={getStyle(props)}
      alt={props.originalName}
      src={`${ASSET_URI}/${props.url}`}
    />
  );
}
