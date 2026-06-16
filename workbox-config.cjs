module.exports = {
  globDirectory: "dist",
  globPatterns: ["**/*.{svg,html,js,css}"],
  swDest: "dist/sw.js",
  //   ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  swSrc: "src/sw-template.js", // generateSw no funciona con esta propiedad
};
