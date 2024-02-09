import { useDroppable } from "@dnd-kit/core"
import { SortableContext } from "@dnd-kit/sortable"

import { Card, Badge } from "flowbite-react"

import KeywordItem from "./KeywordItem"

const KeywordList = (props) => {
	const { setNodeRef } = useDroppable({ id: props.title })

	return (
		<div className=' flex flex-col w-full h-full '>
			<h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-3'>
				{props.title}
			</h5>
			<main className=' h-full  bg-slate-400 rounded-lg ps-4 pt-4 flex '>
				<SortableContext id={props.title} items={props.tasks}>
					<ul ref={setNodeRef} className='flex flex-wrap w-full  gap-4 '>
						{props.tasks.map((task) => (
							<KeywordItem key={task} title={task} />
						))}
					</ul>
				</SortableContext>
			</main>
		</div>
	)
}

export default KeywordList
