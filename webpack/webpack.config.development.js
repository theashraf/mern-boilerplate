const webpack = require("webpack")

module.exports = () => {
	return {
		entry: [
			"webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&noInfo=true&reload=true"
		],
		devtool: "cheap-eval-source-map",
		mode: "development",
		plugins: [new webpack.HotModuleReplacementPlugin()],
		devServer: {
			overlay: {
				errors: true
			},
			contentBase: __dirname + "/../client/public"
		}
	}
}
