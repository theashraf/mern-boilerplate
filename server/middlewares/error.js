module.exports = app => {
	app.use((req, res, next) => {
		const error = new Error("not found")
		error.status = 404
		next(error)
	})
	app.use((err, req, res, next) => {
		res.status(err.status || 500).json({ error: err.message })
	})
}
