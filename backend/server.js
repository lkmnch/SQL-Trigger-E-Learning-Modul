const express = require("express")
const bodyParser = require("body-parser")
const { executeQuery } = require("./database")

const app = express()
const port = 3001

app.use(bodyParser.json())

app.post("/execute-query", async (req, res) => {
	const { query } = req.body

	try {
		const result = await executeQuery(query)
		res.json({ result })
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" })
	}
})

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
