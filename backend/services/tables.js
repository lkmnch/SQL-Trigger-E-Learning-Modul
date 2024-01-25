const db = require("./db")
const helper = require("../helper")

async function getTables() {
	const rows = await db.query(`SHOW tables`)
	const data = helper.emptyOrRows(rows)
	return data
}

module.exports = { getTables }
