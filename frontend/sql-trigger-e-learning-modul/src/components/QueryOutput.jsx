import React, { useContext } from "react"
import TablesContext from "../context/TablesProvider"

const QueryOutput = () => {
	const { data, tableHeaders } = useContext(TablesContext)
	return (
		<>
			{data.length ? (
				<div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
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
							{data.map((row, index) => {
								console.log(row)
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
				</div>
			) : (
				<div>No Output</div>
			)}
		</>
	)
}

export default QueryOutput
