const webpackMerge = require("webpack-merge")

module.exports = ({ mode, presets }) => {
	const presetsConfig = presets.map(preset => require("./" + preset)(mode))
	return webpackMerge({}, ...presetsConfig)
}
