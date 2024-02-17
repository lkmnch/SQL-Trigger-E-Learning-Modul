import React from "react"
import { Card } from "flowbite-react"

function Syntax() {
	return (
		<div className='grid gap-4 xl:grid-cols-2 2xl:grid-cols-3'>
			<Card>
				{/* Einzelne Elemente der Syntax "clickable machen und neben dran die Erklärung aufpoppen lassen" */}
				<span className='dark:text-white'>
					{`CREATE
					[DEFINER = user] TRIGGER [IF NOT EXISTS] trigger_name
				trigger_time trigger_event ON tbl_name FOR EACH ROW [trigger_order]
				trigger_body trigger_time: {BEFORE | AFTER}
				trigger_event: {INSERT | UPDATE | DELETE}
				trigger_order: {FOLLOWS | PRECEDES} other_trigger_name`}
				</span>
			</Card>
			<Card>Documentation</Card>
		</div>
	)
}

export default Syntax
