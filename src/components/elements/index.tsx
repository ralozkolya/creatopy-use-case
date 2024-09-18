import { JsonSlideOrElement } from "../../types/jsonDesign.types";
import Button from "./button";
import Image from "./image";
import Text from "./text";

export default function Element(element: JsonSlideOrElement) {
  if ("slide" === element.type) {
    return element.elements.map((element) => (
      <Element {...element} key={element.properties.id} />
    ));
  }

  switch (element.layerType) {
    case "text":
      return <Text {...element.properties} />;
    case "image":
      return <Image {...element.properties} />;
    case "button":
      return <Button {...element.properties} />;
  }
}
