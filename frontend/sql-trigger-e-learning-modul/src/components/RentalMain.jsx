import React from "react"
import { Sidebar, Button, Card } from "flowbite-react"
import { Outlet, Link } from "react-router-dom"
function RentalMain() {
	return (
		<div className='container mx-auto flex justify-between'>
			<Link to={`customer/create`}>
				<Card className='max-w-sm'>
					<h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
						Neuen Kunden anlegen
					</h5>
					<p className='font-normal text-gray-700 dark:text-gray-400'>
						Hier neuen Kunden anlegen, damit diesem DVDs verliehen werden
						können.
					</p>
				</Card>
			</Link>

			<Card className='max-w-sm'>
				<h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
					DVD an Kunden verleihen
				</h5>
				<p className='font-normal text-gray-700 dark:text-gray-400'>
					Hier kann eine DVD, falls diese vorhanden ist einem Kunden verliehen
					werden.
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
	)
}

export default RentalMain
