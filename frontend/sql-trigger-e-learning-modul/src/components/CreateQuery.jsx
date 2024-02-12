import { DndContext } from "@dnd-kit/core"
import { arrayMove } from "@dnd-kit/sortable"
import { useContext, useState } from "react"

import { Card, Button, Toast } from "flowbite-react"
import { HiX } from "react-icons/hi"
import KeywordList from "./KeywordList"
import InstructionModal from "./InstructionModal"

import AppContext from "../context/AppProvider"

function CreateQuery(props) {
	const [openModal, setOpenModal] = useState(false)
	const [triggerCreated, setTriggerCreated] = useState(false)
	const { instructions, triggerKeywords, handleExecuteQuery, currentPage } =
		useContext(AppContext)

	const [keywordList, setKeywordList] = useState(
		props.keywords ? props.keywords : triggerKeywords
	)
	console.log(keywordList)
	const [showToast, setShowToast] = useState(false)
	const queryName = Object.keys(keywordList)[0]
	const queryKeywords = keywordList[queryName].toString().replace(/,/g, " ")

	const handleRunQuery = () => {
		if (queryKeywords === props.correctQuery) {
			setOpenModal(true)
			setTriggerCreated(true)
			handleExecuteQuery(queryKeywords, currentPage)
		} else {
			setShowToast(true)
		}
	}

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
				<Card className=' h-1/2'>
					<div className='flex gap-5'>
						{Object.keys(keywordList).map((key) => (
							<KeywordList key={key} title={key} tasks={keywordList[key]} />
						))}
					</div>
					<Button className='w-40' onClick={handleRunQuery}>
						Ausführen
					</Button>
				</Card>
			</DndContext>
			{showToast && (
				<Toast>
					<div className='inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200'>
						<HiX />
					</div>
					<div className='ml-3 text-sm font-normal'>
						Query ist falsch, versuche es erneut!
					</div>
					<Toast.Toggle onDismiss={() => setShowToast(false)} />
				</Toast>
			)}
			<InstructionModal
				openModal={true}
				title={instructions[props.instructions]?.title}
				text1={instructions[props.instructions]?.text1}
				text2={instructions[props.instructions]?.text2}
			/>
			{/* auch überprüfen ob ul li in richtiger Reihenfolge (queryCorrect) */}
			{triggerCreated ? (
				<InstructionModal
					openModal={openModal}
					title={instructions[props.instructions + "a"]?.title}
					text1={instructions[props.instructions + "a"]?.text1}
					text2={instructions[props.instructions + "a"]?.text2}
					action={instructions[props.instructions + "a"]?.action}
				/>
			) : null}
		</>
	)
}
export default CreateQuery
