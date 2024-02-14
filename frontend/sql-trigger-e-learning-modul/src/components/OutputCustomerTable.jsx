import React from "react"
import CreateQuery from "./CreateQuery"
import QueryOutput from "./QueryOutput"

function OutputCustomerTable() {
	const selectCustomerKeywords = {
		queryName: "Select-Customers-Query",
		keywords: [";", "customer", "SELECT", "*", "FROM"],
	}
	const correctQuery = "SELECT * FROM customer ;"
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
