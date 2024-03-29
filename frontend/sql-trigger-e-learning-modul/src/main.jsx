import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.jsx"
import "./index.css"
import { Flowbite } from "flowbite-react"
import { AppProvider } from "./context/AppProvider.jsx"
import ErrorPage from "./error-page"
import RentalMain from "./garbage/RentalMain.jsx"
import Editor from "./components/Editor.jsx"

import Syntax from "./garbage/Syntax.jsx"
import NewCustomer from "./components/NewCustomer.jsx"
import CreateQuery from "./components/CreateQuery.jsx"
import OutputCustomerTable from "./components/OutputCustomerTable.jsx"
import Welcome from "./components/Welcome.jsx"
import Scenario_1 from "./components/Scenario_1.jsx"

const correctQuery =
	"CREATE TRIGGER customer_create_date BEFORE INSERT ON customer FOR EACH ROW SET NEW.create_date = NOW() ;"

const triggerKeywords = {
	queryName: "Trigger-Query",
	keywords: [
		"NOW()",
		"INSERT",
		"TRIGGER",
		"customer_create_date",
		"BEFORE",
		"CREATE",
		"ON",
		";",
		"customer",
		"NEW.create_date",
		"FOR EACH ROW",
		"SET",
		"=",
	],
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <Welcome />, errorElement: <ErrorPage /> },
			{ path: "/hilfe", element: <Syntax />, errorElement: <ErrorPage /> },
			{
				path: "/editor",
				element: <Editor />,
				errorElement: <ErrorPage />,
			},
			{
				path: "rental",
				element: <RentalMain />,
				errorElement: <ErrorPage />,
			},
			{ path: "rental/customer", element: <div>Kunde </div> },
			{
				path: "rental/customer/create",
				element: <NewCustomer />,
			},
			{
				path: "scenario1",
				element: <Scenario_1 />,
			},
			{
				path: "scenario1/createTriggerQuery",
				element: (
					<CreateQuery
						queryName={triggerKeywords.queryName}
						keywords={triggerKeywords.keywords}
						correctQuery={correctQuery}
						instructionsNumber={"S1S1"}
					/>
				),
			},
			{
				path: "scenario1/outputCustomerTable",
				element: <OutputCustomerTable />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Flowbite>
			<AppProvider>
				<RouterProvider router={router} />
			</AppProvider>
		</Flowbite>
	</React.StrictMode>
)
