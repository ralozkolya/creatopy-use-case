import { CSSObject } from "@emotion/styled";
import {
  JsonBackgroundSolid,
  JsonBackgroundWithBorder,
  JsonShadow,
} from "../types/jsonDesign.types";

function solidBg(bg: JsonBackgroundSolid & JsonBackgroundWithBorder) {
  const style: CSSObject = {
    backgroundColor: bg.scolor,
  };

  if (bg.useBorder) {
    style.borderColor = bg.borderColor;
  }

  return style;
}

export function cssBg(bg: JsonBackgroundWithBorder) {
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
}: JsonShadow) {
  if (!useShadow) return {};

  return {
    boxShadow: `${hShadow}px ${vShadow}px ${blur}px ${color}`,
  } as CSSObject;
}
