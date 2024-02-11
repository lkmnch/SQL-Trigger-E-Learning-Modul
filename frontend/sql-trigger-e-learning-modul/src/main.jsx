import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.jsx"
import "./index.css"
import { Flowbite } from "flowbite-react"
import { AppProvider } from "./context/AppProvider.jsx"
import ErrorPage from "./error-page"
import RentalMain from "./components/RentalMain"
import Editor from "./components/Editor.jsx"
import Welcome from "./components/Welcome.jsx"
import Syntax from "./components/Syntax.jsx"
import NewCustomer from "./components/NewCustomer.jsx"
import CreateQuery from "./components/CreateQuery.jsx"
import OutputCustomerTable from "./components/OutputCustomerTable.jsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <Welcome />, errorElement: <ErrorPage /> },
			{ path: "/syntax", element: <Syntax />, errorElement: <ErrorPage /> },
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
			{ path: "scenario1", element: <CreateQuery instructions={"S1S1"} /> },
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
