import React from "react"
import { useDroppable } from "@dnd-kit/core"

function QueryDroppableArea({ queryName, children }) {
	const { isOver, setNodeRef } = useDroppable({
		id: "query-droppable",
	})

	const style = {
		border: isOver ? "2px solid darkgreen" : "1px solid black",
	}

	return (
		<div>
			<h2 className='text-4xl text-white dark:text-white mb-4'>{queryName}</h2>
			<div
				className={`h-60 bg-beige dark:text-black rounded-lg p-4`}
				ref={setNodeRef}
				role='droppable'
				aria-label='Query Droppable Area'
				tabIndex={0}
				style={style}>
				{children}
			</div>
		</div>
	)
}

export default QueryDroppableArea
