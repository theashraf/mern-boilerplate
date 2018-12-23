const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpackMerge = require("webpack-merge")
const loadWebpackConfig = env =>
	require(`./webpack/webpack.config.${env.mode}`)(env)
const loadPresets = env => require("./webpack/presets")(env)
const defaultPresets = ["eslint", "babel", "css", "file"]

module.exports = (env = { mode: "development", presets: [] }) => {
	//load default presets & env presets
	env.presets = [...defaultPresets].concat(env.presets || [])
	//set mode
	env.mode = env.mode || "development"

	return webpackMerge(
		{
			entry: [__dirname + "/client/index.js"],
			plugins: [
				new webpack.ProgressPlugin(),
				new HtmlWebpackPlugin({
					template: __dirname + "/client/index.html",
					title: "MERN Boilerplate",
					minify: env.mode === "production"
				})
			]
		},
		loadWebpackConfig(env),
		loadPresets(env)
	)
}
