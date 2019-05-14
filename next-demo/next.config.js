const withCSS = require('@zeit/next-css')
// module.exports = withCSS()

const withSass = require('@zeit/next-sass')
// module.exports = withSass()

module.exports = {
  webpack(config, ...args) {
    config = withCSS().webpack(config, ...args)
    config = withSass().webpack(config, ...args)
    return config
  }
}