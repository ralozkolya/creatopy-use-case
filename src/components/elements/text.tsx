import styled, { CSSObject } from "@emotion/styled";
import {
  JsonFontSettings,
  JsonTextProperties,
  JsonTextSlateConfigChildren,
} from "../../types/jsonDesign.types";

const Div = styled.div(
  (props: Partial<JsonTextProperties & JsonFontSettings>): CSSObject => ({
    position: "absolute",
    top: props.y,
    left: props.x,
    width: props.width,
    height: props.height,
    textAlign: props.alignment,
    fontSize: props.fontSize,
    fontFamily: props.fontFamily,
  })
);

export default function Text(props: Omit<JsonTextProperties, "id">) {
  return props.config.nodes.map((node) =>
    node.children.map((node: JsonTextSlateConfigChildren) => (
      <Div {...props} {...node.fontSettings}>
        {node.text ?? "wat"}
      </Div>
    ))
  );
}
