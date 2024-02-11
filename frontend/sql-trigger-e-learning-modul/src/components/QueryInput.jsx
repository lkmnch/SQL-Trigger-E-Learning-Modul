import React, { useContext } from "react"
import AppContext from "../context/AppProvider"

const QueryInput = () => {
	const { handleExecuteQuery, handleQueryChange, query } =
		useContext(AppContext)
	return (
		<>
			<button
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4 w-1/6'
				onClick={() => handleExecuteQuery(query)}>
				Ausführen
			</button>
			<textarea
				className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				value={query}
				onChange={handleQueryChange}
				placeholder='Hier Query eingeben'
				rows={20}
				cols={100}
			/>
		</>
	)
}

export default QueryInput
