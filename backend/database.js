const mysql = require("mysql")

const connection = mysql.createConnection({
	host: "your-host",
	user: "your-username",
	password: "your-password",
	database: "your-database",
})

connection.connect()

function executeQuery(query) {
	return new Promise((resolve, reject) => {
		connection.query(query, (error, results) => {
			if (error) {
				reject(error)
			} else {
				resolve(results)
			}
		})
	})
}

module.exports = { executeQuery }
