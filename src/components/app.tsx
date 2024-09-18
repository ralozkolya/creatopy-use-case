import { CSSProperties } from "react";
import { JsonDesign, JsonDesignProperties } from "../types/jsonDesign.types";
import { cssBg } from "../util/css";
import Element from "./elements";
import HtmlShell from "./html-shell";
import { extractFontFamilies } from "../util/json";

interface AppProps {
  data: {
    banner: JsonDesign;
  };
}

const getStyle = (props: JsonDesignProperties): CSSProperties => ({
  ...cssBg(props.backgroundColor),
  width: props.width,
  height: props.height,
  transform: "scale(2)",
  transformOrigin: "top left",
});

export default function App({ data: { banner } }: AppProps) {
  return (
    <HtmlShell
      title={banner?.properties?.name}
      fonts={extractFontFamilies(banner)}
    >
      <div style={getStyle(banner.properties)}>
        {banner.elements.map((element) => (
          <Element {...element} key={element.properties.id} />
        ))}
      </div>
    </HtmlShell>
  );
}
