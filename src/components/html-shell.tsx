import { PropsWithChildren } from "react";
import { FONTS_URI } from "../config";

interface HtmlShellProps {
  title?: string;
  fonts?: string[];
}

export default function HtmlShell({
  children,
  title,
  fonts,
}: PropsWithChildren<HtmlShellProps>) {
  // It's fine to omit DOCTYPE declaration, as react-dom/server injects one automatically
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ?? "Banner"}</title>
        {fonts?.map((family) => (
          <link
            rel="stylesheet"
            href={`${FONTS_URI}?${new URLSearchParams({ family })}`}
          />
        ))}
      </head>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
