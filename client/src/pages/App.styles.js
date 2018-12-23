export default theme => ({
	appBar: {
		paddingTop: theme.spacing.unit * 5,
		paddingBottom: theme.spacing.unit * 5,
		textAlign: "center"
	},
	appBarHeader: {
		color: "#fafafa"
	},
	paper: {
		...theme.mixins.gutters(),
		paddingTop: theme.spacing.unit * 2,
		paddingBottom: theme.spacing.unit * 2
	}
})
