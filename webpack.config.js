// Webpack will try loading webpack.config.js in current directory.
// Below config same as:
//             (1)       (2)                 (3)
// webpack ./entry.js bundle.js --module-bind 'css=style!css'

const path = require('path');

module.exports = {
  // Saw this in another tutorial. Sets root to 'App':
  // context: path.join(__dirname, 'App'), ...
  context: path.join(__dirname), // Don't need that here
  // (1)
  entry: "./entry.js",
  // (2)
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      // (3)
      // When chaining loaders, apply right to left, from file if specified
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};
