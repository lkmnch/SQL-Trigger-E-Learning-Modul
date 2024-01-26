const db = require("./db")
const helper = require("../helper")

async function getTables() {
	const rows = await db.query(`SHOW tables`)
	const data = helper.emptyOrRows(rows)
	return data
}

async function getTable(table) {
	const rows = await db.query(`SELECT * FROM ${table}`)
	const data = helper.emptyOrRows(rows)
	return data
}

module.exports = { getTables, getTable }
