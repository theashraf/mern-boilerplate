import React from "react"
import AppBar from "@material-ui/core/AppBar"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import { Helmet } from "react-helmet"
import styles from "./App.styles"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const App = ({ classes }) => {
	return (
		<div>
			<Helmet>
				<title>MERN</title>
			</Helmet>
			<AppBar position="static" className={classes.appBar}>
				<Typography variant="h2" component="h3">
					MERN Boilerplate
				</Typography>
			</AppBar>
			<br />
			<Paper className={classes.paper} elevation={3}>
				<Typography component="h3">MERN Boilerplate</Typography>
				<Link to="/page">Go to Another Page</Link>
			</Paper>
		</div>
	)
}

App.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)
