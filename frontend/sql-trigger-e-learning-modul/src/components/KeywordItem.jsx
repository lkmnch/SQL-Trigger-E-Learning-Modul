import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Badge } from "flowbite-react"

const KeywordItem = (props) => {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({
			id: props.title,
		})

	return (
		<li
			className='bg-green-300 h-10 rounded-xl flex  items-center '
			ref={setNodeRef}
			{...listeners}
			{...attributes}
			style={{
				transform: CSS.Transform.toString(transform),
				transition: transition,
			}}>
			<span className='text-center m-5'>{props.title}</span>
		</li>
	)
}

export default KeywordItem
