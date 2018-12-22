const { users } = require("../api")

module.exports = app => {
	app.use("/api/users", users)
}
