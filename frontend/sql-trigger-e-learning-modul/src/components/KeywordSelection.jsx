import React, { useState, useContext } from "react"
import { Button } from "flowbite-react"
import TablesContext from "../context/TablesProvider"

function KeywordSelection() {
	const { setTriggerQuery } = useContext(TablesContext)
	const keywordlist = [
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
	]

	function createQuery(keyword) {
		setTriggerQuery((previousKeyword) => [...previousKeyword, keyword])
	}

	return (
		<div className='flex gap-2'>
			{keywordlist.map((keyword, index) => (
				<Button key={index} onClick={() => createQuery(keyword)}>
					{keyword}
				</Button>
			))}
		</div>
	)
}

export default KeywordSelection
