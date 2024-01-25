const express = require("express")
const router = express.Router()
const tables = require("../services/tables")

router.get("/", async function (req, res, next) {
	console.log(next)
	try {
		res.json(await tables.getTables())
	} catch (err) {
		console.error(`Error while getting tableNames`, err.message)
		next(err)
	}
})

module.exports = router
