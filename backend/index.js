// Skript zur Server-Applikationserstellung, damit request/responses gesendet werden können
const express = require("express")
const app = express()
const port = 3000
const plantsRouter = require("./routes/plants")
const tableNamesRouter = require("./routes/tables")
const cors = require("cors")

//.use() ist dafuer da um middleware zu mounten --> request und responses werden durch die gemounten Funktionen geleitet
app.use(cors()) // Erlaubt Cross-Origin Resource Sharing
app.use(express.json()) // json-strings koennen damit geparst werden
app.use(express.urlencoded({ extended: true })) //urlencoded data kann geparst werden

app.get("/", (req, res) => {
	// das hier ist die root-URL der Server-Applikation
	res.json({ message: "ok" })
})

app.use("/plants", plantsRouter)

app.use("/tables", tableNamesRouter)
//Error handler middleware
app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500
	console.error(err.message, err.stack)
	res.status(statusCode).json({ message: err.message })
	return
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
