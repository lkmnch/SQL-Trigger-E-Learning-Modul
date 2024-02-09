import { createContext, useState } from "react"

const TablesContext = createContext()

export const TablesProvider = ({ children }) => {
	const [data, setData] = useState([])
	const [tableNames, setTableNames] = useState([])
	const [tableHeaders, setTableHeaders] = useState([])

	const [createCustomerResponse, setCreateCustomerResponse] = useState("")

	const [triggerQuery, setTriggerQuery] = useState([])

	return (
		<TablesContext.Provider
			value={{
				data,
				setData,
				tableNames,
				setTableNames,
				tableHeaders,
				setTableHeaders,
				createCustomerResponse,
				setCreateCustomerResponse,
				triggerQuery,
				setTriggerQuery,
			}}>
			{children}
		</TablesContext.Provider>
	)
}
export default TablesContext
