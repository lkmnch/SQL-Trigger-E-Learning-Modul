import { useState } from "react"
import axios from "axios"
import { Database } from "lucide-react"
import { Sidebar } from "flowbite-react"
import { HiShoppingBag, HiDatabase } from "react-icons/hi"
import { DarkThemeToggle } from "flowbite-react"
import { useEffect } from "react"

const baseURL = "http://localhost:3000/plants"

function App() {
	const [query, setQuery] = useState("")
	const [tableHeaders, setTableHeaders] = useState([])
	const [data, setData] = useState([])
	const [tableNames, setTableNames] = useState([])

	const handleQueryChange = (event) => {
		setQuery(event.target.value)
	}

	const getTableNames = async () => {
		const response = await axios.get("http://localhost:3000/tables")
		const responseData = response.data
		const names = responseData.map((obj) => obj.Tables_in_plant_shop)
		setTableNames(names)
	}

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

	const handleExecuteQuery = () => {
		axios({
			method: "post",
			url: baseURL,
			data: {
				query: query,
			},
			headers: {
				Accept: "application/json",
				"Content-type": "application/json",
			},
		}).then((response) => {
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
		<div className='bg-slate-50 dark:bg-slate-600 min-h-screen'>
			<header className='container mx-auto'>
				{/* <h1 className='mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white'>
					SQL-Trigger, E-Learning-Modul
				</h1> */}
				<DarkThemeToggle />
			</header>
			<div className='flex container mx-auto gap-4'>
				<div className='container w-1/3'>
					<Sidebar aria-label='Sidebar with multi-level dropdown example'>
						<Sidebar.Items>
							<Sidebar.ItemGroup>
								<Sidebar.Collapse icon={HiDatabase} label='Database'>
									{tableNames.map((name, index) => (
										<Sidebar.Item key={index}>{name}</Sidebar.Item>
									))}
								</Sidebar.Collapse>
							</Sidebar.ItemGroup>
						</Sidebar.Items>
					</Sidebar>
				</div>
				<div className='container mx-auto flex-row'>
					<main>
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

						{data ? (
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
											return (
												<tr
													className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'
													key={index}>
													{Object.values(row).map((rowValue, index) => {
														return (
															<td className='px-6 py-4' key={index}>
																{rowValue}
															</td>
														)
													})}
												</tr>
											)
										})}
									</tbody>
								</table>
							</div>
						) : (
							<div></div>
						)}
					</main>
				</div>
			</div>
		</div>
	)
}

export default App
