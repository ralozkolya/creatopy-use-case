import { css } from "@emotion/react";
import {
  JsonFontSettings,
  JsonTextProperties,
  JsonTextSlateConfigChildren,
} from "../../types/jsonDesign.types";
import { animation } from "../../util/animation";
import { position } from "../../util/css";

type StyleProps = Partial<
  JsonTextProperties & JsonFontSettings & JsonTextSlateConfigChildren
>;
type TextProps = Omit<JsonTextProperties, "id" | "feed">;

function getStyle(props: StyleProps) {
  return css({
    ...animation(props.buildIn),
    ...position(props),
    textAlign: props.alignment,
    fontSize: props.fontSize,
    fontFamily: props.fontFamily,
    color: props.color,
    lineHeight: props.lineHeight,
  });
}

export default function Text(props: TextProps) {
  return props.config.nodes.map((node) =>
    node.children.map((node: JsonTextSlateConfigChildren) => (
      <div css={getStyle({ ...props, ...node.fontSettings, ...node })}>
        {node.text}
      </div>
    ))
  );
}
