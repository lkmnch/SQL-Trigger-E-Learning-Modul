const db = require("./db")
const helper = require("../helper")
const config = require("../config")

async function getMultiple(page = 1) {
	const offset = helper.getOffset(page, config.listPerPage)
	const rows = await db.query(
		`SELECT * FROM plants LIMIT ${offset},${config.listPerPage}`
	)
	const data = helper.emptyOrRows(rows)
	const meta = { page }

	return { data, meta }
}

/* async function create(plant) {
	const result = await db.query(`INSERT INTO plants (plant_id,
        plant_name,
        plant_description,
        price,
        stock_quantity) VALUES ('${plant.id}','${plant.name}', '${plant.description}', '${plant.price}', '${plant.stock}')`)

	let message = "Error in creating plant"

	if (result.affectedRows) {
		message = "Plant created successfully"
	}

	return { message }
} */
async function create(plant) {
	const result = await db.query(`${plant.query}`)

	let message = "Error in Query"

	if (result.affectedRows) {
		message = "Query was successfully"
	}

	return { message }
}

module.exports = { getMultiple, create }
