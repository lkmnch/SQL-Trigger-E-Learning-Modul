import { Card, Button } from "flowbite-react"
import React from "react"
import { Link } from "react-router-dom"
import { HiArrowRight } from "react-icons/hi"

function Scenario_1() {
	return (
		<Card className='h-fit'>
			<h1 className='text-4xl'>Automatisches Zeitstempeln</h1>
			<p>
				In diesem Szenario erstellst du einen SQL-Trigger, dessen
				Auslösungsevent das Hinzufügen eines neuen Kunden in die Kundentabelle
				ist. Für jede Zeile die hinzugefügt wird, soll die Spalte "create_date"
				- also das Erstellungsdatum mit dem jetzigen Datum gefüllt werden.
			</p>
			<p>
				Um die Funktionalität des Triggers zu überprüfen, legst du daraufhin
				einen Kunden an und lässt dir die Kundentabelle ausgeben, um
				nachzuschauen, ob die Spalte "create_date" gefüllt wurde.
			</p>
			<p>
				Dieses Szenario soll dir verdeutlichen, dass man SQL-Trigger dazu
				einsetzen kann, um automatisierte Zeitstempel zu erstellen und somit das
				Hinzufügen von Daten nachzuverfolgen.
			</p>
			<Link to={"/scenario1/createTriggerQuery"}>
				<Button className=' bg-darkgreen w-full'>
					<span>Starte mit Schritt 1</span>
					<HiArrowRight className='ms-4' />
				</Button>
			</Link>
		</Card>
	)
}

export default Scenario_1
