
// Webpack only handles JS natively, need `css-loader` to process CSS files.
// Also need `style-loader` to apply styles in CSS file.
// Run `npm install` to install loaders.
// Need to be installed locally, living in `node_modules` folder.
// By prefixing loaders to module request, module went through loader pipeline.
// Loaders transform file content in specific ways.
// After transformations are applied, result is JS module.
// Don't write long requires, e.g. `require("!style!css!./style.css");`.
// Bind file extensions to loaders, just need to write `require("./style.css")`.
// $ webpack ./entry.js bundle.js --module-bind 'css=style!css'
// Note: fully-qualified loader extensions still work though.
// Some environments may require double quotes: `–module-bind "css=style!css"`.

require("./style.css");

// Webpack analyzes this file for dependencies to other files.
// These files (modules) also in bundle.js.
// Webpack gives modules unique ids & saves by id in bundle.js file.
// Only entry module executed on startup.
// Small runtime provides `require` & executes dependencies when required.

let content = require("./content.js");
document.write(content);

// See `webpack.config.js` file for more notes.
