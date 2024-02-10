import { DndContext } from "@dnd-kit/core"
import { arrayMove } from "@dnd-kit/sortable"
import { useContext, useState } from "react"

import { Card, Button } from "flowbite-react"
import KeywordList from "./KeywordList"
import InstructionModal from "./InstructionModal"

import AppContext from "../context/AppProvider"

function CreateTrigger(props) {
	const [openModal, setOpenModal] = useState(false)
	const [triggerCreated, setTriggerCreated] = useState(false)
	const { instructions, triggerKeywords } = useContext(AppContext)
	console.log(instructions[props.instructions]?.title)
	const [keywordList, setKeywordList] = useState(
		props.keywords ? props.keywords : triggerKeywords
	)
	const dragEndHandler = (e) => {
		//console.log(e)
		//console.log(!e.over)
		// Check if item is drag into unknown area
		if (!e.over || !e.active.data.current || !e.over.data.current) return

		// Check if item position is the same
		if (e.active.id === e.over.id) return

		// Check if item is moved outside of the column
		if (
			e.active.data.current.sortable.containerId !==
			e.over.data.current.sortable.containerId
		)
			return

		// Sort the items list order based on item target position
		// draggable von x - zu y moven
		const containerName = e.active.data.current.sortable.containerId
		setKeywordList((keywordList) => {
			const temp = { ...keywordList }
			if (!e.over) return temp
			const oldIdx = temp[containerName].indexOf(e.active.id.toString())
			const newIdx = temp[containerName].indexOf(e.over.id.toString())
			temp[containerName] = arrayMove(temp[containerName], oldIdx, newIdx)
			return temp
		})
	}

	const dragOverHandler = (e) => {
		console.log(e)
		// Check if item is drag into unknown area
		if (!e.over) return

		// Get the initial and target sortable list name
		const initialContainer = e.active.data.current?.sortable?.containerId
		const targetContainer = e.over.data.current?.sortable?.containerId

		// if there are none initial sortable list name, then item is not sortable item
		if (!initialContainer) return

		// Order the item list based on target item position
		setKeywordList((keywordList) => {
			const temp = { ...keywordList }

			// If there are no target container then item is moved into a droppable zone
			// droppable = whole area of the sortable list (works when the sortable list is empty)
			if (!targetContainer) {
				// If item is already there then don't re-added it
				if (keywordList[e.over.id].includes(e.active.id.toString())) return temp

				// Remove item from it's initial container
				temp[initialContainer] = temp[initialContainer].filter(
					(task) => task !== e.active.id.toString()
				)

				// Add item to it's target container which the droppable zone belongs to
				temp[e.over.id].push(e.active.id.toString())

				return temp
			}

			// If the item is drag around in the same container then just reorder the list
			if (initialContainer === targetContainer) {
				//console.log("item dragged in same container")
				const oldIdx = temp[initialContainer].indexOf(e.active.id.toString())
				const newIdx = temp[initialContainer].indexOf(e.over.id.toString())
				temp[initialContainer] = arrayMove(
					temp[initialContainer],
					oldIdx,
					newIdx
				)
			} else {
				// If the item is drag into another different container
				console.log("Item dragged to another container")
				// Remove item from it's initial container
				temp[initialContainer] = temp[initialContainer].filter(
					(task) => task !== e.active.id.toString()
				)

				// Add item to it's target container
				const newIdx = temp[targetContainer].indexOf(e.over.id.toString())
				temp[targetContainer].splice(newIdx, 0, e.active.id.toString())
			}

			return temp
		})
	}

	return (
		<>
			{/* // Attach the dragEnd and dragOver event listeners */}
			<DndContext onDragEnd={dragEndHandler} onDragOver={dragOverHandler}>
				<Card className='w-1/2 h-full'>
					<Button
						onClick={() => {
							setOpenModal(true)
							setTriggerCreated(true)
						}}>
						Ausführen
					</Button>
					{Object.keys(keywordList).map((key) => (
						<KeywordList key={key} title={key} tasks={keywordList[key]} />
					))}
				</Card>
			</DndContext>
			<InstructionModal
				openModal={true}
				title={instructions[props.instructions].title}
				text1={instructions[props.instructions].text1}
				text2={instructions[props.instructions].text2}
			/>
			{/* auch überprüfen ob ul li in richtiger Reihenfolge (queryCorrect) */}
			{triggerCreated ? (
				<InstructionModal
					openModal={openModal}
					title={instructions[props.instructions + "a"].title}
					text1={instructions[props.instructions + "a"].text1}
					text2={instructions[props.instructions + "a"].text2}
					action={instructions[props.instructions + "a"].action}
				/>
			) : null}
		</>
	)
}
export default CreateTrigger
