import React from "react"
import CreateQuery from "./CreateQuery"
import QueryOutput from "./QueryOutput"

function OutputCustomerTable() {
	const selectCustomerKeywords = {
		queryName: "Select-Customers-Query",
		keywords: [
			"SELECT",
			"INSERT",
			"UPDATE",
			"DELETE",
			"INTO",
			"CREATE",
			"TRIGGER",
			"customer_create_date",
			"BEFORE",
			"AFTER",
			"ON",
			"customer",
			"FOR EACH ROW",
			"SET",
			"NEW.create_date",
			"OLD.create_date",
			"=",
			"NOW()",
			"*",
			"FROM",
		],
	}
	const correctQuery = "SELECT * FROM customer"
	return (
		<div className='flex flex-col gap-5'>
			<CreateQuery
				queryName={selectCustomerKeywords.queryName}
				keywords={selectCustomerKeywords.keywords}
				correctQuery={correctQuery}
				instructionsNumber={"S1S3"}
			/>
			<QueryOutput />
		</div>
	)
}

export default OutputCustomerTable
