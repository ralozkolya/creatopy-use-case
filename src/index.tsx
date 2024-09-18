import express, { NextFunction, Request, Response } from "express";
import { renderToPipeableStream } from "react-dom/server";
import { retrieveData } from "./api";
import App from "./components/app";
import { DEFAULT_HASH } from "./config";

const app = express();

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await retrieveData((req.query.hash as string) ?? DEFAULT_HASH);
    renderToPipeableStream(<App data={data} />).pipe(res);
  } catch (error) {
    next(error);
  }
});

const port: number = +process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
