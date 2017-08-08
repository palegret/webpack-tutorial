# Webpack v1 Tutorial

__From "Getting Started" tutorial__
(https://webpack.github.io/docs/tutorials/getting-started/)

## NPM Commands
- npm install webpack -g  // Installs Webpack.
- npm install css-loader style-loader  // Installs Webpack CSS loader.
- npm install webpack-dev-server -g  // Installs Webpack development server.

## Command-line usage
- webpack ./entry.js bundle.js  // Compiles entry and dependencies to bundle.
- webpack ./entry.js bundle.js --module-bind 'css=style!css'  // Binds CSS loader extensions.
- webpack  // Reads from webpack.config.js.
- webpack --progress --colors --watch  // Shows build progress in color and watches for changes.
- Note: --progress & --colors options may be defaults, had no effect when run.

## Webpack Development Server
### $ webpack-dev-server --progress --colors
- Binds small express server on localhost:8080.
- Serves static assets & bundle (compiled automatically).
- Automatically compiles/updates browser when bundle recompiles (via SockJS). 
- Open http://localhost:8080/webpack-dev-server/bundle in your browser.
- Dev server uses Webpack watch mode.
- Also prevents Webpack from emitting files to disk.
- Instead, serves files from memory.
