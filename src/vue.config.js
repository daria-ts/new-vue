module.exports = {
	pwa: {
		themeColor: "#ff1129",
		msTileColor: "#ff1129",
		manifestOptions: {
			background_color: "#ff1129",
		},
		name: "Точка склада",
	},
	css: {
		loaderOptions: {
			sass: {
				prependData:
					' @import "@/global-styles/colors.scss", @import "@/global-styles/tokens.scss"',
			},
		},
	},

	runtimeCompiler: true,
};
