import React from "react"
import CreateTrigger from "./CreateTrigger"
import QueryOutput from "./QueryOutput"

function OutputCustomerTable() {
	const selectCustomerKeywords = {
		"Select-Customers-Query": [],
		Keywords: [
			"SELECT",
			"INSERT",
			"UPDATE",
			"DELETE",
			"INTO",
			"CREATE",
			"TRIGGER",
			"customer_create_date",
			"BEFORE",
			"AFTRER",
			"ON",
			"customer",
			"FOR EACH ROW",
			"SET",
			"NEW.create_date",
			"OLD.create_date",
			"=",
			"NOW()",
		],
	}
	return (
		<div>
			<CreateTrigger keywords={selectCustomerKeywords} instructions={"S1S3"} />
			<QueryOutput />
		</div>
	)
}

export default OutputCustomerTable
