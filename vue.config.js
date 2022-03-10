module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/styles/config/variables.scss";`,
			},
		},
	},
	devServer: {
		disableHostCheck: true,
	},
};
