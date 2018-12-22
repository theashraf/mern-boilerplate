const CleanWebpackPlugin = require("clean-webpack-plugin")
module.exports = () => ({
	output: {
		filename: "[name].[contenthash].js"
	},
	devtool: "source-map",
	mode: "production",
	plugins: [new CleanWebpackPlugin("dist", { root: __dirname + "/../" })]
})
