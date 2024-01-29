import TablesSidebar from "./components/TablesSidebar"
import { DarkThemeToggle } from "flowbite-react"
import { Tabs } from "flowbite-react"
import { Card } from "flowbite-react"
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi"
import QueryInput from "./components/QueryInput"
import QueryOutput from "./components/QueryOutput"

const App = () => {
	return (
		<div className='bg-slate-50 dark:bg-slate-600 min-h-screen'>
			<header className='container mx-auto'>
				<DarkThemeToggle />
			</header>
			<Tabs aria-label='Full width tabs' style='fullWidth'>
				<Tabs.Item active title='SQL-Editor' icon={HiUserCircle}>
					<div className='flex container mx-auto gap-4'>
						<TablesSidebar />
						<div className='container mx-auto flex-row'>
							<QueryInput />
							<QueryOutput />
						</div>
					</div>
				</Tabs.Item>
				<Tabs.Item title='Verleihsystem' icon={HiUserCircle}>
					<div className='container mx-auto flex justify-between'>
						<Card href='#' className='max-w-sm'>
							<h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
								Neuen Kunden anlegen
							</h5>
							<p className='font-normal text-gray-700 dark:text-gray-400'>
								Hier neuen Kunden anlegen, damit diesem DVDs verliehen werden
								können.
							</p>
						</Card>
						<Card href='#' className='max-w-sm'>
							<h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
								DVD an Kunden verleihen
							</h5>
							<p className='font-normal text-gray-700 dark:text-gray-400'>
								Hier kann eine DVD, falls diese vorhanden ist einem Kunden
								verliehen werden.
							</p>
						</Card>
						<Card href='#' className='max-w-sm'>
							<h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
								DVD Rückgabe
							</h5>
							<p className='font-normal text-gray-700 dark:text-gray-400'>
								Hier kann eine DVD, zur Rückgabe angenommen werden.
							</p>
						</Card>
					</div>
				</Tabs.Item>
			</Tabs>
		</div>
	)
}

export default App
