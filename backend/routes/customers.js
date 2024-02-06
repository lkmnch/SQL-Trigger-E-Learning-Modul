const express = require("express")
const router = express.Router()
const customers = require("../services/customers")

router.post("/", async function (req, res, next) {
	try {
		res.json(await customers.createCustomer(req.body))
	} catch (error) {
		console.error("Error while creating new customer", error.message)
	}
})

module.exports = router
