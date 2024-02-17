import { DarkThemeToggle, Footer, Button, Navbar } from "flowbite-react"
import { Link } from "react-router-dom"
import { HiHome, HiQuestionMarkCircle, HiDatabase } from "react-icons/hi"

import { Outlet } from "react-router-dom"

const App = () => {
	return (
		<div>
			<Navbar fluid className='bg-darkgreen fixed top-0 left-0 right-0 z-10'>
				<div className='px-3 py-3 lg:px-5 lg:pl-3'>
					<Link to={"/"}>
						<div id='logo' className='text-4xl font-black text-white'>
							SQL-Trigger verstehen!
						</div>
					</Link>
				</div>
				<div className='flex gap-4'>
					<Link to={"/"}>
						<Button color='gray'>
							<HiHome className='mr-3 h-4 w-4' />
							Szenarioauswahl
						</Button>
					</Link>
					<Link to={"/hilfe"}>
						<Button color='gray'>
							<HiQuestionMarkCircle className='mr-3 h-4 w-4' />
							Hilfe
						</Button>
					</Link>
					<Link to={"/editor"}>
						<Button color='gray'>
							<HiDatabase className='mr-3 h-4 w-4' />
							SQL-Editor
						</Button>
					</Link>
				</div>
			</Navbar>

			<main className='overflow-y-auto flex  pt-32 justify-center bg-sage min-h-screen '>
				<div className='container mx-auto flex justify-center'>
					<Outlet />
				</div>
			</main>

			<Footer className='bg-beige rounded-none fixed bottom-0 left-0 right-0 z-10 '>
				<DarkThemeToggle />
				<span>SQL-Trigger verstehen! - 2024</span>
			</Footer>
		</div>
	)
}

export default App
