import React from "react"
import classes from "./App.css"
import pic from "./pic.jpeg"
import { BrowserRouter as Router, Route } from "react-router-dom"
const Img = () => {
	return (
		<div>
			{" "}
			<img src={pic} />
		</div>
	)
}
const App = () => {
	return (
		<div>
			<div className={classes.test}>
				<p>welcome</p>
			</div>
			<Router>
				<Route exact path="/img" component={Img} />
			</Router>
		</div>
	)
}

export default App
