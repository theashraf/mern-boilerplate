module.exports = env => ({
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: "[name]_[local]_[hash:base64:5]"
						}
					},
					{
						loader: "postcss-loader",
						options: {
							plugins: [require("autoprefixer")()]
						}
					}
				]
			}
		]
	}
})
