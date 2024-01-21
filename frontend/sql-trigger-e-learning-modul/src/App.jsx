import { useState } from "react"

function App() {
	const [query, setQuery] = useState("")
	const [result, setResult] = useState("")

	const handleQueryChange = (event) => {
		setQuery(event.target.value)
	}

	const handleExecuteQuery = () => {
		//TODO: logic to execute the sql query
		setResult(`Executed query: ${query}`)
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
					<p>{result}</p>
				</div>
			</main>
		</>
	)
}

export default App
