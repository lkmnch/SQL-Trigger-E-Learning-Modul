import React, { useState, useContext, useEffect } from "react"
import { Table, Pagination, Toast } from "flowbite-react"
import { HiX } from "react-icons/hi"
import InstructionModal from "./InstructionModal"
import AppContext from "../context/AppProvider"

const QueryOutput = () => {
	const { data, tableHeaders, instructions } = useContext(AppContext)

	const [currentPage, setCurrentPage] = useState(1)
	const [pageData, setPageData] = useState([])

	const [showToast, setShowToast] = useState(false)
	const [clickedCustomer, setClickedCustomer] = useState("")

	const [openModal, setOpenModal] = useState(false)

	const [searchQuery, setSearchQuery] = useState("")

	const filteredData = data.filter(
		(row) =>
			row.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			row.last_name.toLowerCase().includes(searchQuery.toLowerCase())
	)
	console.log(filteredData)
	const itemsPerPage = 10
	const maxPages = Math.ceil(filteredData.length / itemsPerPage)

	const onPageChange = (page) => {
		setCurrentPage(page)
		getCurrentPageData()
	}

	function getCurrentPageData() {
		const startIndex = (currentPage - 1) * 10
		const endIndex = startIndex + 10
		const tempData = filteredData
		setPageData(tempData.slice(startIndex, endIndex))
	}

	useEffect(() => getCurrentPageData(), [data, currentPage, searchQuery])

	const handleRowClick = (row) => {
		if (row.customer_id !== data[data.length - 1].customer_id) {
			setShowToast(true)
			setClickedCustomer(row.first_name)
		} else {
			setOpenModal(true)
		}
	}

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value)
		setCurrentPage(1)
	}

	return (
		<div className='h-2/3'>
			{data.length ? (
				<div className='relative shadow-md sm:rounded-lg flex flex-col gap-4'>
					<div className='pb-4  bg-white dark:bg-gray-900 flex  gap-4 items-center'>
						<label htmlFor='table-search' className='sr-only'>
							Search
						</label>
						<div className='relative mt-1'>
							<div className='absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none'>
								<svg
									className='w-4 h-4 text-gray-500 dark:text-gray-400'
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 20 20'>
									<path
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
									/>
								</svg>
							</div>
							<input
								type='text'
								id='table-search'
								value={searchQuery}
								placeholder='Kunde suchen'
								className='block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								onChange={handleSearchChange}
							/>
						</div>
						{showToast && (
							<Toast className='max-w-full h-10 mt-1'>
								<div className='inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200'>
									<HiX />
								</div>
								<div className='ml-3 text-sm font-normal'>
									{`${clickedCustomer} ist nicht dein angelegter Kunde`}{" "}
								</div>
							</Toast>
						)}
					</div>
					<Table
						hoverable
						className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
						<Table.Head className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
							{tableHeaders.map((header, index) => (
								<Table.HeadCell scope='col' className='px-6 py-3' key={index}>
									{header}
								</Table.HeadCell>
							))}
						</Table.Head>
						<Table.Body>
							{filteredData.length > 0 ? (
								pageData.map((row, index) => {
									return (
										<Table.Row
											onClick={() => handleRowClick(row)}
											className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'
											key={index}>
											{Object.values(row).map((rowValue, index) => {
												if (typeof rowValue === "object" && rowValue !== null) {
													return (
														<Table.Cell key={index}>
															{Object.entries(rowValue)}
														</Table.Cell>
													)
												} else {
													return <Table.Cell key={index}>{rowValue}</Table.Cell>
												}
											})}
										</Table.Row>
									)
								})
							) : (
								<Table.Row>
									<Table.Cell colSpan='9' className='text-center'>
										Keine passenden Zeilen gefunden
									</Table.Cell>
								</Table.Row>
							)}
						</Table.Body>
					</Table>
					<div className='flex overflow-x-auto sm:justify-center mb-5'>
						<Pagination
							currentPage={currentPage}
							totalPages={maxPages}
							onPageChange={onPageChange}
							showIcons
						/>
					</div>

					<InstructionModal
						openModal={openModal}
						title={instructions.S1a?.title}
						text1={instructions.S1a?.text1}
						text2={instructions.S1a?.text2}
						text3={instructions.S1a?.text3}
						action={instructions.S1a?.action}
						action2={instructions.S1a?.action2}
					/>
				</div>
			) : (
				<div className='dark:text-white'>Keine Ausgabe, führe Query aus!</div>
			)}
		</div>
	)
}

export default QueryOutput
