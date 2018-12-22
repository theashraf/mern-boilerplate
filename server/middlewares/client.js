const {
	webpackDevMiddleware,
	webpackHotMiddleware
} = require("../../webpack/webpack.dev.middleware")
const history = require("connect-history-api-fallback")

module.exports = app => {
	app.use(history())
	app.use(webpackDevMiddleware)
	app.use(webpackHotMiddleware)
}
