import { CSSProperties } from "react";
import {
  JsonBackgroundSolid,
  JsonBackgroundWithBorder,
  JsonBaseElementProperties,
  JsonShadow,
} from "../types/jsonDesign.types";

function solidBg(
  bg: JsonBackgroundSolid & JsonBackgroundWithBorder
): CSSProperties {
  const style: CSSProperties = {
    backgroundColor: bg.scolor,
  };

  if (bg.useBorder) {
    style.borderColor = bg.borderColor;
  }

  return style;
}

export function position(
  props: Partial<JsonBaseElementProperties>
): CSSProperties {
  return {
    width: props.width,
    height: props.height,
    position: "absolute",
    top: props.y,
    left: props.x,
  };
}

// Currently only support solid BG
export function cssBg(bg: JsonBackgroundWithBorder): CSSProperties {
  switch (bg.type) {
    case "solid":
      return solidBg(bg);
    default:
      return {};
  }
}

export function shadow({
  hShadow,
  vShadow,
  blur,
  color,
  useShadow,
}: JsonShadow): CSSProperties {
  if (!useShadow) return {};

  return {
    boxShadow: `${hShadow}px ${vShadow}px ${blur}px ${color}`,
  };
}
