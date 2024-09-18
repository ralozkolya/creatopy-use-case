import { CSSProperties } from "react";
import { JsonButtonProperties } from "../../types/jsonDesign.types";
import { position, cssBg } from "../../util/css";

function getStyle(props: JsonButtonProperties): CSSProperties {
  return {
    ...position(props),
    ...cssBg(props.backgroundColor),
    fontFamily: props.labelStyle.fontFamily,
    fontWeight: props.labelStyle.fontWeight,
    fontSize: props.labelStyle.fontSize,
    color: props.labelStyle.color,
    cursor: "pointer",
  };
}

export default function Button(props: JsonButtonProperties) {
  return <button style={getStyle(props)}>{props.buttonLabel}</button>;
}
