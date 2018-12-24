import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import App from "./pages/App"
import Page from "./pages/Page"
import NotFound from "./pages/NotFound"

const Routes = () => (
	<div>
		<Router>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/page" component={Page} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	</div>
)

export default Routes
