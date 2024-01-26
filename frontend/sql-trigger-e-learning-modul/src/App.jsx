import TablesSidebar from "./components/TablesSidebar"
import { DarkThemeToggle } from "flowbite-react"
import QueryInput from "./components/QueryInput"
import QueryOutput from "./components/QueryOutput"

const App = () => {
	return (
		<div className='bg-slate-50 dark:bg-slate-600 min-h-screen'>
			<header className='container mx-auto'>
				<DarkThemeToggle />
			</header>
			<div className='flex container mx-auto gap-4'>
				<TablesSidebar />
				<div className='container mx-auto flex-row'>
					<QueryInput />
					<QueryOutput />
				</div>
			</div>
		</div>
	)
}

export default App
