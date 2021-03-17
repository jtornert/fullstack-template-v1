# Fullstack Template v1

Awesome! ✨

## How to build

After cloning the repo and installing the required node modules with `npm install`, run `npm run build` to generate all the files needed. Then you can test to see if the server works with `npm run start`. Refer to the next section about what every script does.

---

## `npm` scripts

- `npm run build`

  - Compiles the `/src` folder to `/server`. (equal to `npm run build:server`)
  - Runs Gulp tests defined in `gulpfile.js`. (equal to `npm run build:app`)
  - Builds the web app with `parcel`. (equal to `npm run test`)

- `npm run build:server`

  - Compiles the `/src` folder to `/server`.

- `npm run build:app`

  - Builds the web app with `parcel`.

- `npm run test`

  - Runs Gulp tests defined in `gulpfile.js`.

- `npm run start`

  - Starts the compiled server `/server/index.js`.

- `npm run start:watch`

  - Starts the compiled server and listens for changes.

- `npm run start:dev`.

  - Starts the Typescript development server `/src/index.ts`.

- `npm run watch:app`

  - Compiles the web app with `parcel watch`.

- `npm run watch:server`

  - Compiles the `/src` folder to `/server` and listens for changes to `/src`.
