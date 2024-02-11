import React, { useState, useContext, useEffect } from "react"
import { Pagination } from "flowbite-react"

import AppContext from "../context/AppProvider"

const QueryOutput = () => {
	const { data, tableHeaders } = useContext(AppContext)
	const [currentPage, setCurrentPage] = useState(1)
	const [pageData, setPageData] = useState([])
	const onPageChange = (page) => {
		setCurrentPage(page)
		getCurrentPageData()
	}
	//https://flowbite.com/docs/components/tables/ pagination and search von hier...
	function getCurrentPageData() {
		const startIndex = (currentPage - 1) * 10
		const endIndex = startIndex + 10
		const tempData = data
		setPageData(tempData.slice(startIndex, endIndex))
	}
	useEffect(() => getCurrentPageData(), [data])

	return (
		<>
			{pageData.length ? (
				<div className='relative shadow-md sm:rounded-lg flex flex-col gap-4'>
					<table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
						<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
							<tr>
								{tableHeaders.map((header, index) => (
									<th scope='col' className='px-6 py-3' key={index}>
										{header}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{pageData.map((row, index) => {
								return (
									<tr
										className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'
										key={index}>
										{Object.values(row).map((rowValue, index) => {
											if (typeof rowValue === "object" && rowValue !== null) {
												console.log(rowValue)
												return (
													<td className='px-6 py-4' key={index}>
														{Object.entries(rowValue)}
													</td>
												)
											} else {
												return (
													<td className='px-6 py-4' key={index}>
														{rowValue}
													</td>
												)
											}
										})}
									</tr>
								)
							})}
						</tbody>
					</table>
					<div className='flex overflow-x-auto sm:justify-center mb-5'>
						<Pagination
							currentPage={currentPage}
							totalPages={100}
							onPageChange={onPageChange}
							showIcons
						/>
					</div>
				</div>
			) : (
				<div className='dark:text-white'>Keine Ausgabe, führe Query aus!</div>
			)}
		</>
	)
}

export default QueryOutput
