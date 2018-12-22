module.exports = () => ({
	module: {
		rules: [
			{
				test: /\.(jpg|png|jpeg)$/,
				use: [
					{
						loader: "file-loader"
					}
				]
			}
		]
	}
})
