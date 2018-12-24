const express = require("express")
const fs = require("fs")
const path = require("path")

module.exports = app => {
	if (process.env.NODE_ENV === "development") {
		const {
			webpackDevMiddleware,
			webpackHotMiddleware
		} = require("../../webpack/webpack.dev.middleware")
		const history = require("connect-history-api-fallback")
		app.use(express.static(path.join(__dirname, "/../../client/public")))
		app.use(history())
		app.use(webpackDevMiddleware)
		app.use(webpackHotMiddleware)
	} else {
		app.use(express.static(path.join(__dirname, "/../../dist")))
		app.get("*", (req, res, next) => {
			fs.existsSync(__dirname + "/../../dist/index.html")
				? res.sendFile(path.resolve(__dirname + "/../../dist/index.html"))
				: next()
		})
	}
}
