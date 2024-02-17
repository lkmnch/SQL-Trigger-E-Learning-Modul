import React from "react"
import { Link } from "react-router-dom"
import { Card, Button, Tabs } from "flowbite-react"

function Welcome() {
	return (
		<div className='flex flex-col gap-4'>
			<Card>
				<h1 className='text-4xl font-bold tracking-tight text-gray-900 dark:text-white'>
					Herzlich Willkommen auf SQL-Trigger verstehen!
				</h1>
				<p className='text-xl font-normal text-gray-900 dark:text-gray-400'>
					In diesem interaktiven E-Learning Modul kannst du lernen, wie
					SQL-Trigger funktionieren. Es handelt sich hier bei um eine Art
					Simualtion eines Webshops mit Komponenten mit denen
					Datenbankinteraktionen möglich sind. In verschiedenen Szenarien wirst
					du bestimmte Trigger erstellen, um die Anforderungen des jeweiligen
					Szenarios zu erfüllen sowie Kunden anlegen, Bestellungen verändern
					oder auch Produkte auswählen und die entsprechenden Datenbanktabellen
					überprüfen, ob deine definierten Trigger auch das gemacht haben was
					sie machen sollten.
				</p>
				<p className='text-xl font-normal text-gray-900 dark:text-gray-400'>
					Je nach RDBMS unterscheiden sich SQL-Trigger in ihrer Syntax und
					funktionsweise. In diesem Modul werden SQL-Trigger aufgezeigt, wie sie
					in MySQL eingesetzt werden.
				</p>
				<p className='text-xl font-normal text-gray-900 dark:text-gray-400'>
					Die Szenarios können unabhängig von einander durchgeführt werden.
				</p>
			</Card>
			<div className='bg-white grid grid-cols-2 gap-4 p-4 rounded-md'>
				<Link to={"/scenario1"} className='w-full'>
					<Button className=' bg-darkgreen w-full'>
						<span className='text-2xl'>Automatisches Zeitstempeln</span>
					</Button>
				</Link>
				<Button disabled className=' bg-darkgreen'>
					<span className='text-2xl'>
						Lagerbestandsaktualisierung nach Bestelleingang
					</span>
				</Button>
				<Button disabled className='  bg-darkgreen'>
					<span className='text-2xl'>
						Gültige Übergänge bei Bestellstatusänderung
					</span>
				</Button>
				<Button disabled className='  bg-darkgreen'>
					<span className='text-2xl'>
						Speicherung und Analyse der Bestellstatusveränderungen
					</span>
				</Button>
				<Button disabled className='  bg-darkgreen'>
					<span className='text-2xl'>
						Löschung Kundenkonto bei offenen Bestellungen
					</span>
				</Button>
				<Button disabled className='  bg-darkgreen'>
					<span className='text-2xl'>
						Aktualisierung Lagerbestand nach Bestellstornierung
					</span>
				</Button>
			</div>
		</div>
	)
}

export default Welcome
