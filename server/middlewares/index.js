const express = require("express")
const api = require("./api")
const client = require("./client")
const error = require("./error")

module.exports = app => {
	app.use(express.json())
	api(app)
	client(app)
	error(app)
}
