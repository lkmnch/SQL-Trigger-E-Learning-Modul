const express = require("express")
const router = express.Router()
const plants = require("../services/plants")

//GET plants
router.get("/", async function (req, res, next) {
	try {
		res.header("Access-Control-Allow-Origin", "*")
		res.json(await plants.getMultiple(req.query.page))
	} catch (err) {
		console.error(`Error while getting plants`, err.message)
		next(err)
	}
})

//POST plant
router.post("/", async function (req, res, next) {
	try {
		res.json(await plants.create(req.body))
	} catch (err) {
		console.error(`Error while creating plant`, err.message)
		next(err)
	}
})

module.exports = router
