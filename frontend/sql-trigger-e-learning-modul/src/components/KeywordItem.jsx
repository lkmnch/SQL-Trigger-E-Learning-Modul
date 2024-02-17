import { useDraggable } from "@dnd-kit/core"
import { useSortable } from "@dnd-kit/sortable"
import { Badge } from "flowbite-react"

const KeywordItem = ({ keyword }) => {
	const { attributes, listeners, setNodeRef, isDragging, transform } =
		useDraggable({
			id: `keyword-${keyword}`,
			data: keyword,
		})
	const style = {
		cursor: "move",
		opacity: isDragging ? 0.5 : 1,
		transform:
			transform && `translate3d(${transform.x}px, ${transform.y}px, 0)`,
	}

	return (
		<div
			ref={setNodeRef}
			{...attributes}
			{...listeners}
			className='bg-sage h-10 rounded-xl flex  items-center '
			style={style}>
			<span className='text-beige text-center m-5'> {keyword}</span>
		</div>
	)
}

export default KeywordItem
