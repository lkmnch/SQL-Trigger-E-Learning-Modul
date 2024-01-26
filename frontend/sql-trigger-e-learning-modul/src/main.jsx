import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { Flowbite } from "flowbite-react"
import { TablesProvider } from "./context/TablesProvider.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Flowbite>
			<TablesProvider>
				<App />
			</TablesProvider>
		</Flowbite>
	</React.StrictMode>
)
