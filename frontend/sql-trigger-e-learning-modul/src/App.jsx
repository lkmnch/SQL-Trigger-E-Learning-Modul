import { useState } from "react"
import axios from "axios"

const baseURL = "http://localhost:3000/plants"

function App() {
	const [query, setQuery] = useState("")
	const [tableHeaders, setTableHeaders] = useState([])
	const [data, setData] = useState([])

	const handleQueryChange = (event) => {
		setQuery(event.target.value)
	}

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

		// fetch get:
	}
	return (
		<>
			<header>
				<h1>SQL-Trigger, E-Learning-Modul</h1>
			</header>
			<main className='bg-slate-400'>
				<textarea
					value={query}
					onChange={handleQueryChange}
					placeholder='Hier Query eingeben'
					rows={20}
					cols={100}
				/>
				<button className='bg-lime-500' onClick={handleExecuteQuery}>
					Run
				</button>

				{data ? (
					<div id='select-output'>
						<table>
							<thead>
								<tr>
									{tableHeaders.map((header, index) => (
										<th key={index}>{header}</th>
									))}
								</tr>
							</thead>
							<tbody>
								{data.map((row, index) => {
									return (
										<tr key={index}>
											{Object.values(row).map((rowValue, index) => {
												return <td key={index}>{rowValue}</td>
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
		</>
	)
}

export default App
