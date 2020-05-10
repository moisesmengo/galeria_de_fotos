const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/moises/projetos/power sites/galeria_de_fotos/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/moises/projetos/power sites/galeria_de_fotos/src/pages/index.js"))),
  "component---src-templates-image-js": hot(preferDefault(require("/home/moises/projetos/power sites/galeria_de_fotos/src/templates/image.js")))
}

