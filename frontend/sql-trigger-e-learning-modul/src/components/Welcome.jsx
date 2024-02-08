import React from "react"
import { Card, Button, Tabs } from "flowbite-react"

function Welcome() {
	return (
		<Card className='w-2/4 '>
			<h1 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
				Herzlich Willkommen auf SQL-Trigger verstehen!
			</h1>
			<p className='font-normal text-gray-700 dark:text-gray-400'>
				In diesem interaktiven E-Learning Modul lernst du, anhand einer
				DVD-Verleihungssoftware wie SQL-Trigger funktionieren und wo diese zum
				Einsatz kommen.
			</p>
			<p className='font-normal text-gray-700 dark:text-gray-400'>
				Je nach RDBMS unterscheiden sich SQL-Trigger in ihrer Syntax und
				funktionsweise minimal. In diesem Modul werden SQL-Trigger aufgezeigt,
				wie sie in MySQL eingesetzt werden.
			</p>
			<p className='font-normal text-gray-700 dark:text-gray-400'>
				In 4 verschiedene Szenarien, werden dir Möglichkeiten gezeigt, wie du
				einen SQL-Trigger einsetzen kannst.
			</p>

			<Tabs>
				<Tabs.Item title='Szenario 1'>
					<p className='font-medium text-gray-800 dark:text-white'>
						Im ersten Szenario musst du einen Trigger erstellen, welcher beim
						Anlegen eines neuen Kunden getriggert wird. Dieser Trigger soll
						sicherstellen, dass immer wenn ein neuer Kunde angelegt wird auch
						das aktuelle Datum und Uhrzeit, dem neuen Eintrag ergänzt werden
					</p>
					<Button className='mt-5'>
						Szenario 1 starten!
						<svg
							className='-mr-1 ml-2 h-4 w-4'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
								clipRule='evenodd'
							/>
						</svg>
					</Button>
				</Tabs.Item>
				<Tabs.Item title='Szenario 2'>
					<p className='font-medium text-gray-800 dark:text-white'></p>
					<Button className='mt-5'>
						Szenario 2 starten!
						<svg
							className='-mr-1 ml-2 h-4 w-4'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
								clipRule='evenodd'
							/>
						</svg>
					</Button>
				</Tabs.Item>
				<Tabs.Item title='Szenario 3'>
					<p className='font-medium text-gray-800 dark:text-white'>
						Im ersten Szenario musst du einen Trigger erstellen, welcher beim
						Anlegen eines neuen Kunden getriggert wird. Dieser Trigger soll
						sicherstellen, dass immer wenn ein neuer Kunde angelegt wird auch
						das aktuelle Datum und Uhrzeit, dem neuen Eintrag ergänzt werden
					</p>
					<Button className='mt-5'>
						Szenario 3 starten!
						<svg
							className='-mr-1 ml-2 h-4 w-4'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
								clipRule='evenodd'
							/>
						</svg>
					</Button>
				</Tabs.Item>
				<Tabs.Item title='Szenario 4'>
					<p className='font-medium text-gray-800 dark:text-white'>
						Im ersten Szenario musst du einen Trigger erstellen, welcher beim
						Anlegen eines neuen Kunden getriggert wird. Dieser Trigger soll
						sicherstellen, dass immer wenn ein neuer Kunde angelegt wird auch
						das aktuelle Datum und Uhrzeit, dem neuen Eintrag ergänzt werden
					</p>
					<Button className='mt-5'>
						Szenario 4 starten!
						<svg
							className='-mr-1 ml-2 h-4 w-4'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
								clipRule='evenodd'
							/>
						</svg>
					</Button>
				</Tabs.Item>
			</Tabs>
		</Card>
	)
}

export default Welcome
