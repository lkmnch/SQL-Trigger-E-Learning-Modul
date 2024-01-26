const express = require("express")
const router = express.Router()
const tables = require("../services/tables")

router.get("/", async function (req, res, next) {
	try {
		res.json(await tables.getTables())
	} catch (err) {
		console.error(`Error while getting tableNames`, err.message)
		next(err)
	}
})

router.get("/:tableName", async function (req, res, next) {
	try {
		res.json(await tables.getTable(req.params.tableName))
	} catch (err) {
		console.error(`Error while getting tableNames`, err.message)
		next(err)
	}
})

module.exports = router
