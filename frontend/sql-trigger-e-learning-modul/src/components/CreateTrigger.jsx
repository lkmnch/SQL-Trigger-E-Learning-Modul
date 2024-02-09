import { DndContext } from "@dnd-kit/core"
import { arrayMove } from "@dnd-kit/sortable"
import { useState } from "react"

import { Card, Button } from "flowbite-react"
import { HiCheck } from "react-icons/hi"
import KeywordList from "./KeywordList"
import InstructionModal from "./InstructionModal"
import { Link } from "react-router-dom"

function CreateTrigger() {
	const [openModal, setOpenModal] = useState(false)
	const [triggerCreated, setTriggerCreated] = useState(false)
	const instructions = {
		S1S2: {
			title: "Szenario 1 - Schritt 1/3",
			text1:
				"Ziehe die SQL-Keywords in der richtigen Reihenfolge in das Query-Feld, um den Trigger zu erstellen.",
			text2:
				'Danach auf "Trigger anlegen" damit der Trigger in die DB geschrieben wird.',
		},
		S1S2a: {
			title: "Szenario 1 - Schritt 1/3 - erfolgreich",
			text1: "Der Trigger wurde erfolgreich in die Datenbank geschrieben.",
			text2:
				"Als nächstes überprüfst du ob durch das Anlegen eines Kunden die Anweisung im Trigger ausgeführt wird.",
			action: (
				<Link to={"/rental/customer/create"}>
					<Button>Neuen Kunden anlegen</Button>
				</Link>
			),
		},
	}
	const [keywordList, setKeywordList] = useState({
		Query: [],
		Keywords: [
			"SELECT",
			"INSERT",
			"UPDATE",
			"DELETE",
			"INTO",
			"CREATE",
			"TRIGGER",
			"customer_create_date",
			"BEFORE",
			"AFTRER",
			"ON",
			"customer",
			"FOR EACH ROW",
			"SET",
			"NEW.create_date",
			"OLD.create_date",
			"=",
			"NOW()",
		],
	})
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
						Trigger anlegen
					</Button>
					{Object.keys(keywordList).map((key) => (
						<KeywordList key={key} title={key} tasks={keywordList[key]} />
					))}
				</Card>
			</DndContext>
			<InstructionModal
				openModal={true}
				title={instructions.S1S2.title}
				text1={instructions.S1S2.text1}
				text2={instructions.S1S2.text2}
			/>
			{/* auch überprüfen ob ul li in richtiger Reihenfolge (queryCorrect) */}
			{triggerCreated ? (
				<InstructionModal
					openModal={openModal}
					title={instructions.S1S2a.title}
					text1={instructions.S1S2a.text1}
					text2={instructions.S1S2a.text2}
					action={instructions.S1S2a.action}
				/>
			) : null}
		</>
	)
}
export default CreateTrigger
