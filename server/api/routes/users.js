const express = require("express")
const Router = express.Router()

Router.get("/", (req, res) => {
	res.status(200).json([
		{
			id: 1,
			username: "John"
		},
		{
			id: 1,
			username: "Ali"
		},
		{
			id: 1,
			username: "Doe"
		}
	])
})

module.exports = Router
