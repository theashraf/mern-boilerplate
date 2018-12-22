const webpack = require("webpack")
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require("webpack-hot-middleware")
const webpackConfig = require("../webpack.config")({ mode: "development" })
const compiler = webpack(webpackConfig)

module.exports = {
	webpackDevMiddleware: webpackDevMiddleware(compiler, {}),
	webpackHotMiddleware: webpackHotMiddleware(compiler, {})
}
