// next.config.js
module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production'
    ? 'https://firnazluztian.github.io/'
    : '',
  // Optionally, force trailing slashes if needed:
  // exportTrailingSlash: true,
}