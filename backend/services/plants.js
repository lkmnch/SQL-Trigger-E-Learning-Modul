const db = require("./db")
const helper = require("../helper")
const config = require("../config")

/* async function getMultiple(page = 1) {
	const offset = helper.getOffset(page, config.listPerPage)
	const rows = await db.query(
		`SELECT * FROM plants LIMIT ${offset},${config.listPerPage}`
	)
	const data = helper.emptyOrRows(rows)
	const meta = { page }

	return { data, meta }
} */

async function execute(query, page = 1) {
	console.log(query)
	//const result = await db.query(`${query.query}`)
	//const offset = helper.getOffset(page, config.listPerPage)
	return await db.query(`${query.query}`)
}

module.exports = { execute }
