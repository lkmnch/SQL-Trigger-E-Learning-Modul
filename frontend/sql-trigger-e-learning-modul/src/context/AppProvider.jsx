import { createContext, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "flowbite-react"
import axios from "axios"
const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const [data, setData] = useState([])
	const [tableNames, setTableNames] = useState([])
	const [tableHeaders, setTableHeaders] = useState([])

	const [createCustomerResponse, setCreateCustomerResponse] = useState("")

	const [triggerQuery, setTriggerQuery] = useState([])

	const baseURL = "http://localhost:3000/plants"

	const [query, setQuery] = useState("")

	const handleQueryChange = (event) => {
		setQuery(event.target.value)
	}

	const handleExecuteQuery = (query, page) => {
		axios.post(baseURL, { query: query, page: page }).then((response) => {
			console.log(response.data)
			if (Array.isArray(response.data)) {
				setTableHeaders(Object.keys(response.data[0]))
				setData(Object.values(response.data))
			} else {
				setTableHeaders([])
				setData([])
			}
		})
	}

	const instructions = {
		S1S1: {
			title: "Szenario 1 - Schritt 1/4",
			text1:
				"Ziehe die SQL-Keywords in der richtigen Reihenfolge in das Query-Feld, um den Trigger zu erstellen.",
			text2:
				'Danach auf "Trigger anlegen" damit der Trigger in die DB geschrieben wird.',
		},
		S1S1a: {
			title: "Szenario 1 - Schritt 1/4 - erfolgreich",
			text1: "Der Trigger wurde erfolgreich in die Datenbank geschrieben.",
			text2:
				"Als nächstes überprüfst du ob durch das Anlegen eines Kunden die Anweisung im Trigger ausgeführt wird.",
			action: (
				<Link to={"/rental/customer/create"}>
					<Button>Neuen Kunden anlegen</Button>
				</Link>
			),
		},
		S1S2: {
			title: "Szenario 1 - Schritt 2/4",
			text1: "Du befindest dich auf der neuen Kunden anlegen Seite.",
			text2:
				"Fülle die entsprechenden Felder aus und lege dann den Kunden an, was das Event zum Auslösen des Triggers ist",
		},
		S1S2a: {
			title: "Szenario 1 - Schritt 2/4 - erfolgreich",
			text1: "Der Kunde wurde erfolgreich in die Kunden-Tabelle geschrieben.",
			text2:
				"Als nächstes überprüfst du ob durch das Anlegen des Kunden die Spalte 'create_date' in der Kundentabelle gefüllt wurde.",
			action: (
				<Link to={"/scenario1/outputCustomerTable"}>
					<Button>Kundentabelle ausgeben lassen</Button>
				</Link>
			),
		},
		S1S3: {
			title: "Szenario 1 - Schritt 3/4",
			text1:
				"Ziehe wieder die Keywords in der richtigen Reihenfolge, um zu schauen, ob der Kunde in der Kundentabelle geschrieben worden ist",
			text2:
				"Klicke dann wieder auf 'Ausführen', um dir die Kundentabelle auszugeben",
		},
		S1S3a: {
			title: "Szenario 1 - Schritt 3/4 ",
			text1:
				"Sehr gut! Unten siehst du die Kudentabelle, suche deinen angelegten Kunden und begutachte die Zeilen und schau ob der Trigger ausgeführt worden ist. ",
			text2: "Klicke auf die Zeile deines Kunden.",
		},
		S1a: {
			title: "Szenario 1 - Schritt 4/4 - erfolgreich",
			text1:
				"Herzlichen Glückwunsch! Du hast einen SQL-Trigger erfolgreich erstellt und überprüft.",
			text2:
				"Wie du sehen kannst wurde 'create-date' gefüllt und somit hat der Trigger funktioniert.",
			text3:
				"Du hast das erste Szenario erfolgreich durchlaufen. Du kannst jetzt entweder zurück zur Auswahl oder direkt mit dem zweiten Szenario weiter machen.",
			action: (
				<Link to={"/"}>
					<Button>Zurück zur Szenarioauswahl</Button>
				</Link>
			),
			action2: (
				<Link to={"/"}>
					<Button>Beginne mit Szenario 2</Button>
				</Link>
			),
		},
	}

	const triggerKeywords = {
		"Trigger-Query": [],
		Keywords: [
			"SELECT",
			"INSERT",
			"UPDATE",
			"DELETE",
			"INTO",
			"CREATE",
			"TRIGGER",
			"customer_create_date",
			"BEFORE",
			"AFTRER",
			"ON",
			"customer",
			"FOR EACH ROW",
			"SET",
			"NEW.create_date",
			"OLD.create_date",
			"=",
			"NOW()",
		],
	}

	return (
		<AppContext.Provider
			value={{
				data,
				setData,
				tableNames,
				setTableNames,
				tableHeaders,
				setTableHeaders,
				createCustomerResponse,
				setCreateCustomerResponse,
				triggerQuery,
				setTriggerQuery,
				instructions,
				triggerKeywords,
				query,
				handleQueryChange,
				handleExecuteQuery,
			}}>
			{children}
		</AppContext.Provider>
	)
}
export default AppContext
