import { useContext, useState } from "react"
import { DndContext } from "@dnd-kit/core"

import { Button, Toast } from "flowbite-react"
import { HiX } from "react-icons/hi"

import InstructionModal from "./InstructionModal"

import AppContext from "../context/AppProvider"

import KeywordList from "./KeywordList"
import QueryDroppableArea from "./QueryDroppableArea"

import mysqlKeywords from "../sqlKeywords"

function CreateQuery({
	queryName,
	keywords,
	correctQuery,
	instructionsNumber,
}) {
	const [openModal, setOpenModal] = useState(false)
	const [triggerCreated, setTriggerCreated] = useState(false)
	const { instructions, handleExecuteQuery, currentPage } =
		useContext(AppContext)

	const [keywordList, setKeywordList] = useState(keywords)

	const [showToast, setShowToast] = useState(false)

	const [isDropped, setIsDropped] = useState(false)
	const [droppedQuery, setDroppedQuery] = useState("")

	const handleRunQuery = () => {
		console.log(droppedQuery)
		if (droppedQuery.trim() == correctQuery.trim()) {
			setOpenModal(true)
			setTriggerCreated(true)
			handleExecuteQuery(droppedQuery, currentPage)
			setShowToast(false)
		} else {
			setShowToast(true)
		}
	}

	const handleDragOver = (event) => {
		const queryKeyword = event.active.data.current
		if (event.over && event.over.id == "query-droppable") {
			setIsDropped(true)
			setDroppedQuery((prevQuery) => prevQuery + " " + queryKeyword)
			const index = keywordList.indexOf(event.active.data.current)
			if (index !== -1) {
				const updatedKeywords = [...keywordList] //array ist ein reference-type deswegen muss copy von keywordList erstellt werden
				updatedKeywords.splice(index, 1)
				setKeywordList(updatedKeywords)
			}
		}
	}

	const handleReset = () => {
		setDroppedQuery("")
		setKeywordList(keywords)
	}

	const shouldStyleBold = (word) => {
		if (mysqlKeywords.includes(word)) {
			return true
		} else {
			return false
		}
	}

	return (
		<div className='h-1/3'>
			<div className='h-full bg-gray-800 p-3 rounded-md flex flex-col gap-4'>
				<DndContext onDragOver={handleDragOver}>
					<QueryDroppableArea queryName={queryName}>
						{isDropped && (
							<div className='flex gap-1'>
								{droppedQuery.split(" ").map((word, index) => (
									<span
										key={index}
										className={` ${
											shouldStyleBold(word) ? "font-bold" : "font-normal"
										}`}>
										{word}
									</span>
								))}
							</div>
						)}
					</QueryDroppableArea>
					<KeywordList keywords={keywordList} />
					<div className='flex gap-4'>
						<Button onClick={() => handleRunQuery()} className='w-40'>
							Query ausführen
						</Button>
						<Button onClick={() => handleReset()} color='gray' className='w-40'>
							Query-Feld zurücksetzen
						</Button>
						<Button
							onClick={() => (
								setIsDropped(true), setDroppedQuery(correctQuery)
							)}
							color='gray'
							className='w-40'>
							Lösung anzeigen
						</Button>
					</div>
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
				</DndContext>
			</div>

			<InstructionModal
				openModal={true}
				title={instructions[instructionsNumber]?.title}
				text1={instructions[instructionsNumber]?.text1}
				text2={instructions[instructionsNumber]?.text2}
			/>
			{/* auch überprüfen ob ul li in richtiger Reihenfolge (queryCorrect) */}
			{triggerCreated ? (
				<InstructionModal
					openModal={openModal}
					title={instructions[instructionsNumber + "a"]?.title}
					text1={instructions[instructionsNumber + "a"]?.text1}
					text2={instructions[instructionsNumber + "a"]?.text2}
					action={instructions[instructionsNumber + "a"]?.action}
				/>
			) : null}
		</div>
	)
}
export default CreateQuery
