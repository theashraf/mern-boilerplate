const webpack = require("webpack")
var overlayStyles = {
	fontSize: "18px"
}
module.exports = () => {
	return {
		entry: [
			"webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&noInfo=true&reload=true&overlayStyles=" +
				encodeURIComponent(JSON.stringify(overlayStyles))
		],
		devtool: "cheap-eval-source-map",
		mode: "development",
		plugins: [new webpack.HotModuleReplacementPlugin()],
		devServer: {
			overlay: {
				errors: true
			},
			contentBase: __dirname + "/../client/public",
			disableHostCheck: true,
			hot: true,
			clientLogLevel: "error",
			historyApiFallback: true,
			open: true,
			port: 3000
		}
	}
}
