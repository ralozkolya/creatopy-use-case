import styled from "@emotion/styled";
import { JsonDesign, JsonDesignProperties } from "../types/jsonDesign.types";
import { cssBg } from "../util/css";
import Element from "./elements";
import HtmlShell from "./html-shell";

interface AppProps {
  data: {
    banner: JsonDesign;
  };
}

const Banner = styled.div((props: JsonDesignProperties) => ({
  ...cssBg(props.backgroundColor),
  width: props.width,
  height: props.height,
  transform: "scale(2)",
  transformOrigin: "top left",
}));

export default function App({ data: { banner } }: AppProps) {
  return (
    <HtmlShell title={banner?.properties?.name}>
      <Banner {...banner.properties}>
        {banner.elements.map((element) => (
          <Element {...element} key={element.properties.id} />
        ))}
      </Banner>
    </HtmlShell>
  );
}
