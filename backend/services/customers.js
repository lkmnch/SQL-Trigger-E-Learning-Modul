const db = require("./db")

//todo db-calls chainen, vlt mit then()? , Nur inserten, wenn noch kein Eintrag vorhanden, Land könnte man eingrenzen im Frontend( Drop Down feste Anzahl und dann entsprechende Id mit geben)
async function createCustomer(customer) {
	try {
		const resultCountry = await db.query(
			`INSERT INTO country (country) VALUES ('${customer.country}')`
		)
		console.log(resultCountry)
		const countryId = resultCountry.insertId

		const resultCity = await db.query(
			`INSERT INTO city (city, country_id) VALUES ("${customer.city}", ${countryId})`
		)
		const cityId = resultCity.insertId

		const resultAddress = await db.query(
			`INSERT INTO address (address, city_id, phone) VALUES ("${customer.address}", ${cityId}, "${customer.phone}")`
		)
		const addressId = resultAddress.insertId

		const resultCustomer =
			await db.query(`INSERT INTO customer ( store_id, first_name, last_name, email, address_id, active)
        values ( ${customer.storeId}, "${customer.firstName}", "${customer.lastName}", "${customer.email}", ${addressId}, ${customer.active})`)
		console.log(resultCustomer.affectedRows)
		if (resultCustomer.affectedRows > 0) {
			const message = "New Customer was created succesfully"
			return message
		} else {
			const ErrorMessage = "Error creating Customr"
			return ErrorMessage
		}
	} catch (error) {
		console.log(`Error creating Customer ${error.message}`)
	}
}

module.exports = { createCustomer }
