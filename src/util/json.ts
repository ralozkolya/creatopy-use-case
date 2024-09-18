import { JsonDesign, JsonSlideOrElement } from "../types/jsonDesign.types";

function traverse(
  queue: JsonSlideOrElement[],
  result: Set<string> = new Set()
) {
  for (const element of queue) {
    if ("slide" === element.type) {
      queue.push(...element.elements);
      continue;
    }

    switch (element.layerType) {
      case "button":
        result.add(element.properties.labelStyle.fontFamily);
        break;
      case "text":
        element.properties.config.nodes.map((node) =>
          result.add(node.defaultFontSettings.fontFamily)
        );
        break;
    }
  }

  return [...result];
}

// Currently only support Google Fonts
export function extractFontFamilies(data: JsonDesign) {
  return traverse([...data.elements]);
}
