const express = require("express")
const router = express.Router()
const plants = require("../services/plants")

//GET
router.get("/", async function (req, res, next) {
	try {
		res.header("Access-Control-Allow-Origin", "*")
		res.json(await plants.getMultiple(req.query.page))
	} catch (err) {
		console.error(`Error while getting plants`, err.message)
		next(err)
	}
})

//POST
router.post("/", async function (req, res, next) {
	try {
		res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173")
		res.setHeader(
			"Access-Control-Allow-Methods",
			"GET, POST, PUT, DELETE, OPTIONS"
		)
		res.setHeader("Access-Control-Expose-Headers", "*")
		res.json(await plants.create(req.body))
	} catch (err) {
		console.error(`Error while creating plant`, err.message)
		next(err)
	}
})

module.exports = router
