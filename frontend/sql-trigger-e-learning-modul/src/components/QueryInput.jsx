import React, { useContext, useState } from "react"
import TablesContext from "../context/TablesProvider"
import axios from "axios"

const QueryInput = () => {
	const baseURL = "http://localhost:3000/plants"
	const { setData, setTableHeaders } = useContext(TablesContext)
	const [query, setQuery] = useState("")

	const handleQueryChange = (event) => {
		setQuery(event.target.value)
	}
	const handleExecuteQuery = () => {
		axios.post(baseURL, { query: query }).then((response) => {
			console.log(response.data)
			if (Array.isArray(response.data)) {
				setTableHeaders(Object.keys(response.data[0]))
				setData(Object.values(response.data))
			} else {
				setTableHeaders([])
				setData([])
			}
		})
	}
	return (
		<>
			<textarea
				className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				value={query}
				onChange={handleQueryChange}
				placeholder='Hier Query eingeben'
				rows={20}
				cols={100}
			/>
			<button
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4'
				onClick={handleExecuteQuery}>
				Run
			</button>
		</>
	)
}

export default QueryInput
