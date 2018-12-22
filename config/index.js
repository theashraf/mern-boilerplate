const env = process.env.NODE_ENV || "development"
const { merge } = require("lodash")
const defaultConfig = require("./default")
const envConfig = require("./" + env)

module.exports = merge(defaultConfig, envConfig)
