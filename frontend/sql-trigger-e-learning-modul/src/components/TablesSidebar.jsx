import React, { useContext, useEffect } from "react"
import { HiDatabase } from "react-icons/hi"
import TablesContext from "../context/TablesProvider"
import { Sidebar } from "flowbite-react"
import axios from "axios"

const TablesSidebar = () => {
	const { setData, setTableHeaders, tableNames, setTableNames } =
		useContext(TablesContext)

	useEffect(() => {
		const fetchData = async () => {
			try {
				await getTableNames()
			} catch (error) {
				console.error("Error fetching table names:", error)
			}
		}

		fetchData()
	}, [])

	const getTableNames = async () => {
		const response = await axios.get("http://localhost:3000/tables")
		const responseData = response.data
		const names = responseData.map((obj) => obj.Tables_in_plant_shop)
		setTableNames(names)
	}

	const handleTableClick = async (name) => {
		const response = await axios.get(`http://localhost:3000/tables/${name}`)
		console.log(response)
		console.log(response.data)
		if (response.data.length !== 0) {
			console.log(response.data.length)
			setTableHeaders(Object.keys(response.data[0]))
			setData(Object.values(response.data))
		} else {
			setTableHeaders([])
			setData([])
		}
	}
	return (
		<div className='container w-1/3'>
			<Sidebar aria-label='Sidebar with multi-level dropdown example'>
				<Sidebar.Items>
					<Sidebar.ItemGroup>
						<Sidebar.Collapse icon={HiDatabase} label='Database'>
							{tableNames.map((name, index) => (
								<Sidebar.Item
									onClick={() => handleTableClick(name)}
									key={index}>
									{name}
								</Sidebar.Item>
							))}
						</Sidebar.Collapse>
					</Sidebar.ItemGroup>
				</Sidebar.Items>
			</Sidebar>
		</div>
	)
}

export default TablesSidebar
