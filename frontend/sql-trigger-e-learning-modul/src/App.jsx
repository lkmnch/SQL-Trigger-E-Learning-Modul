import { useState } from "react"
import axios from "axios"

const baseURL = " http://localhost:3000/plants"

function App() {
	const [query, setQuery] = useState("")
	const [tableHeaders, setTableHeaders] = useState([])
	const [data, setData] = useState([])

	const handleQueryChange = (event) => {
		setQuery(event.target.value)
	}

	const handleExecuteQuery = () => {
		//TODO
		// fetch post: localhost:3000/plants -data(query)
		axios.get(baseURL).then((response) => {
			console.log(response.data.data)
			setTableHeaders(Object.keys(response.data.data[0]))

			setData(Object.values(response.data.data))
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
				<div id='query-result'>
					<h3>Query Result:</h3>
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
										<td>{row.plant_id}</td>
										<td>{row.plant_name}</td>
										<td>{row.plant_description}</td>
										<td>{row.plant_price}</td>
										<td>{row.price}</td>
										<td>{row.stock_quantity}</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
			</main>
		</>
	)
}

export default App
