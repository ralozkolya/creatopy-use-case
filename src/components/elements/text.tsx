import { CSSProperties } from "react";
import {
  JsonFontSettings,
  JsonTextProperties,
  JsonTextSlateConfigChildren,
} from "../../types/jsonDesign.types";
import { position } from "../../util/css";

type StyleProps = Partial<
  JsonTextProperties & JsonFontSettings & JsonTextSlateConfigChildren
>;
type TextProps = Omit<JsonTextProperties, "id" | "feed">;

function getStyle(props: StyleProps): CSSProperties {
  return {
    ...position(props),
    textAlign: props.alignment,
    fontSize: props.fontSize,
    fontFamily: props.fontFamily,
    color: props.color,
  };
}

export default function Text(props: TextProps) {
  return props.config.nodes.map((node) =>
    node.children.map((node: JsonTextSlateConfigChildren) => (
      <div style={getStyle({ ...props, ...node.fontSettings, ...node })}>
        {node.text}
      </div>
    ))
  );
}
