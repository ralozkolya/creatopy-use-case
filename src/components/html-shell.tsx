import { PropsWithChildren } from "react";

export default function HtmlShell({
  children,
  title,
}: PropsWithChildren<{ title?: string }>) {
  // It's fine to omit DOCTYPE declaration, as react-dom/server injects one automatically
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ?? "Banner"}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
