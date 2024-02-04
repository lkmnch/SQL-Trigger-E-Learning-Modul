import React from "react"
import QueryInput from "./QueryInput"
import QueryOutput from "./QueryOutput"

function Editor() {
	return (
		<div className='container mx-auto flex-row'>
			<QueryInput />
			<QueryOutput />
		</div>
	)
}

export default Editor
