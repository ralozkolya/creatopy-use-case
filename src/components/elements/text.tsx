import { CSSProperties } from "react";
import {
  JsonFontSettings,
  JsonTextProperties,
  JsonTextSlateConfigChildren,
} from "../../types/jsonDesign.types";

type StyleProps = Partial<
  JsonTextProperties & JsonFontSettings & JsonTextSlateConfigChildren
>;
type TextProps = Omit<JsonTextProperties, "id" | "feed">;

const getStyle = (props: StyleProps): CSSProperties => ({
  position: "absolute",
  top: props.y,
  left: props.x,
  width: props.width,
  height: props.height,
  textAlign: props.alignment,
  fontSize: props.fontSize,
  fontFamily: props.fontFamily,
  color: props.color,
});

export default function Text(props: TextProps) {
  return props.config.nodes.map((node) =>
    node.children.map((node: JsonTextSlateConfigChildren) => (
      <div style={getStyle({ ...props, ...node.fontSettings, ...node })}>
        {node.text}
      </div>
    ))
  );
}
