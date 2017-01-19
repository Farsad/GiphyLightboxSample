# Lightbox Preview

A very basic giphy search and Lightobx Preview app


## Install

First install dependencies.

```bash
$ npm install
```

## Build

Run this command to build and bundle the project.

```bash
$ npm run build
```

or simple run

```bash
$ gulp
```

inside your project folder


## Start Server

To start local server run

```bash
$ npm run start
```

and goto http://127.0.0.1:9400
You should see a search box for searching in giphy.
If you have search results, you can click on any item and see the preview in a lightbox.
Lightbox has two navigator and works with keyboard arrow keys.


## Code Explanation

#### The JS folder

- JS folder contains five js files:
  - `main.js` Used for initialization of application
  - `search.js` contains codes that handle the search with giphy api and show results in the page
  - `preview.js` contins the codes related to the lightbox preview
  - `helpers.js` contains helper functions

#### The LESS folder

- Less folder contains `.less` files which will be compiled with `gulp-less` and concatenated into single file `style.css`, can be found in `dist` folder after building project.
