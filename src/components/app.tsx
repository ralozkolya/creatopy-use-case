import HtmlShell from "./html-shell";

interface AppProps {
  data: {
    banner: {
      properties: {
        name: string;
      };
    };
  };
}

export default function App({ data }: AppProps) {
  return (
    <HtmlShell title={data.banner?.properties?.name}>
      <h1>Test</h1>
    </HtmlShell>
  );
}
