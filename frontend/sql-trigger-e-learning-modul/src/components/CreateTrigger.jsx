import React from "react"
import QueryInput from "./QueryInput"
import KeywordSelection from "./KeywordSelection"
import InstructionBar from "./InstructionBar"
function CreateTrigger() {
	return (
		<>
			<QueryInput />
			<KeywordSelection />
			<InstructionBar />
		</>
	)
}
export default CreateTrigger
