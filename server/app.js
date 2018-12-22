const express = require("express")
const middleware = require("./middlewares")

const app = express()

middleware(app)

module.exports = app
