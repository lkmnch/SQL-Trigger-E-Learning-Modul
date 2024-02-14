import { useDroppable, DragOverlay } from "@dnd-kit/core"
import { SortableContext } from "@dnd-kit/sortable"

import { Card, Badge } from "flowbite-react"

import KeywordItem from "./KeywordItem"

const KeywordList = ({ keywords }) => {
	const { setNodeRef } = useDroppable({ id: "keywords-droppable" })

	return (
		<main ref={setNodeRef} className='rounded-lg flex  flex-wrap gap-4'>
			{keywords.map((keyword) => (
				<KeywordItem key={keyword} keyword={keyword} />
			))}
		</main>
	)
}

export default KeywordList
