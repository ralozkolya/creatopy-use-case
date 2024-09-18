# Creatopy take-home assesment #

SSR implementation for rendering custom JSON schema as HTML. It utilizes `react-dom/server` to render React app, `eslint` to build TS/JSX, and `express` to serve the content.

## Installation ##

No extra steps are required, running `npm install` should download all the dependencies. It has been tested with the latest LTS release of Node.js - `v20.17.0`. Alternatively, you can build a Docker image using the provided `Dockerfile`.

## Configuration ##

For configuration, environment variables are used. The required variables, as listed in `.env.example` file, are the following:

- `API_URI`: the base URL used to retrieve the JSON data;
- `ASSET_URI`: the base URL for asset retrieval (currenly used only for images);
- `FONTS_URI`: Google Fonts API URL (<https://fonts.googleapis.com/css>);
- `DEFAULT_HASH`: Hash to use if no JSON data hash is provided (more details [below](#usage)).

Additionally, these optional variables are used for further configuration:

- `NODE_ENV`: defines the environment (defaults to `development`). Currently only used for error display;
- `PORT`: TCP port to listen to (defaults to `3000`).

## Usage ##

There are several scripts defined in `package.json` file.

For development, `npm run dev` runs the build process, as well as the server in watch mode. `docker-compose.yaml` uses this script.

For production, you'll need to run `npm run build`, followed by `npm start`, which disables watchers and is, therefore, more performant. `Dockerfile`, with no modifications from `docker-compose.yaml`, serves the app using this approach.

JSON data hash is provided using `hash` GET parameter, and `DEFAULT_HASH` is used if none is provided.

> Example: `http://example.com?hash=123abc`

## Notes ##

- Using data from the default hash provided for testing, and comparing the results to the provided example implementation, I came to conclusion that some of the properties are either getting ignored, or being handled in a non-obvious way. I mean the button background, the 'Plan your vacation' text width, etc. I haven't tried adjusting them, as I wasn't certain these inconsistencies weren't intentional.
