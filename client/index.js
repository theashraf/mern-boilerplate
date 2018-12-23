import React from "react"
import ReactDOM from "react-dom"
import Routes from "./src/Routes"

ReactDOM.render(<Routes />, document.getElementById("app"))

if (module.hot) {
	module.hot.accept()
}
