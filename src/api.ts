import createHttpError from "http-errors";
import { API_URI } from "./config";

async function retrieve(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw createHttpError(response.status, response.statusText);
  }

  return response.json();
}

export function retrieveData(hash: string) {
  return retrieve(`${API_URI}/${hash}/json`);
}
