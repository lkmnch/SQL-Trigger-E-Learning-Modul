import React, { useContext, useEffect } from "react"
import { HiDatabase } from "react-icons/hi"
import AppContext from "../context/AppProvider"
import { Sidebar } from "flowbite-react"
import axios from "axios"
import { Link } from "react-router-dom"

const TablesSidebar = () => {
	const { setData, setTableHeaders, tableNames, setTableNames } =
		useContext(AppContext)

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
		console.log(responseData)
		const names = responseData.map((obj) => obj.Tables_in_sakila)
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
		<Sidebar
			className='h-full fixed top-0 left-0 z-20'
			aria-label='Sidebar for DB-Tables'>
			<Sidebar.Items className='pt-14'>
				<Sidebar.ItemGroup id='other'>
					<Link to={"/"}>
						<div className=' flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
							<span className='px-3 flex-1 whitespace-nowrap'>
								Willkommensseite
							</span>
						</div>
					</Link>
					<Link to={"/syntax"}>
						<div className=' flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
							<span className='px-3 flex-1 whitespace-nowrap'>
								MySQL-Trigger Syntax
							</span>
						</div>
					</Link>
				</Sidebar.ItemGroup>
				<Sidebar.ItemGroup>
					<Link to={"/editor"}>
						<div className=' flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
							<span className='px-3 flex-1 whitespace-nowrap'>SQL-Editor</span>
						</div>
					</Link>
					<Sidebar.Collapse icon={HiDatabase} label='Database'>
						{tableNames.map((name, index) => (
							<Sidebar.Item onClick={() => handleTableClick(name)} key={index}>
								{name}
							</Sidebar.Item>
						))}
					</Sidebar.Collapse>
				</Sidebar.ItemGroup>
				<Sidebar.ItemGroup id='rental'>
					<Link to={"/rental"}>
						<div className=' flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
							<span className='px-3 flex-1 whitespace-nowrap'>
								Verleihsystem - Dashboard
							</span>
						</div>
					</Link>
					<Link to={"rental/customer/create"}>
						<div className=' flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
							<span className='px-3 flex-1 whitespace-nowrap'>
								Kunde anlegen
							</span>
						</div>
					</Link>
					<Sidebar.Item>DVD an Kunden verleihen</Sidebar.Item>
					<Sidebar.Item>DVD Rückgabe</Sidebar.Item>
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	)
}

export default TablesSidebar
