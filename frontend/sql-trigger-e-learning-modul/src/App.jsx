import TablesSidebar from "./components/TablesSidebar"
import { DarkThemeToggle, Tabs, Footer } from "flowbite-react"

import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi"

import { Outlet } from "react-router-dom"

const App = () => {
	return (
		<div>
			<header className='flex justify-between fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
				<div className='px-3 py-3 lg:px-5 lg:pl-3'>
					<div
						id='logo'
						className='text-4xl font-black text-gray-900 dark:text-white'>
						SQL-Trigger verstehen!
					</div>
				</div>
				<DarkThemeToggle />
			</header>
			<div className='bg-slate-50 dark:bg-slate-600 min-h-screen pt-16'>
				<div className='w-full flex flex-col sm:flex-row flex-grow overflow-hidden'>
					<TablesSidebar />
					<div
						id='main-content'
						className='relative w-full h-screen overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900'>
						<main>
							<div className='flex px-4 pt-6'>
								<Outlet />
							</div>
						</main>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
