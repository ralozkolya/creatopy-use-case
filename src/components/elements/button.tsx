import { css } from "@emotion/react";
import { JsonButtonProperties } from "../../types/jsonDesign.types";
import { animation } from "../../util/animation";
import { cssBg, position } from "../../util/css";

function getStyle(props: JsonButtonProperties) {
  return css({
    ...animation(props.buildIn),
    ...position(props),
    ...cssBg(props.backgroundColor),
    fontFamily: props.labelStyle.fontFamily,
    fontWeight: props.labelStyle.fontWeight,
    fontSize: props.labelStyle.fontSize,
    color: props.labelStyle.color,
    cursor: "pointer",
  });
}

export default function Button(props: JsonButtonProperties) {
  return <button css={getStyle(props)}>{props.buttonLabel}</button>;
}
