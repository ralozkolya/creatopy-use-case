import { css } from "@emotion/react";
import { JsonDesign, JsonDesignProperties } from "../types/jsonDesign.types";
import { cssBg } from "../util/css";
import { extractFontFamilies } from "../util/json";
import Element from "./elements";
import HtmlShell from "./html-shell";

interface AppProps {
  data: {
    banner: JsonDesign;
  };
}

function getStyle(props: JsonDesignProperties) {
  return css({
    ...cssBg(props.backgroundColor),
    width: props.width,
    height: props.height,
    position: "relative",
  });
}

export default function App({ data: { banner } }: AppProps) {
  return (
    <HtmlShell
      title={banner?.properties?.name}
      fonts={extractFontFamilies(banner)}
    >
      <div css={getStyle(banner.properties)}>
        {banner.elements.map((element) => (
          <Element {...element} key={element.properties.id} />
        ))}
      </div>
    </HtmlShell>
  );
}
