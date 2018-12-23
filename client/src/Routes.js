import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import App from "./pages/App"
import Page from "./pages/Page"

const Routes = () => (
	<div>
		<Router>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/page" component={Page} />
			</Switch>
		</Router>
	</div>
)

export default Routes
