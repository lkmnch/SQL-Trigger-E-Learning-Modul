import { createContext, useState } from "react"

const TablesContext = createContext()

export const TablesProvider = ({ children }) => {
	const [data, setData] = useState([])
	const [tableNames, setTableNames] = useState([])
	const [tableHeaders, setTableHeaders] = useState([])
	return (
		<TablesContext.Provider
			value={{
				data,
				setData,
				tableNames,
				setTableNames,
				tableHeaders,
				setTableHeaders,
			}}>
			{children}
		</TablesContext.Provider>
	)
}
export default TablesContext
