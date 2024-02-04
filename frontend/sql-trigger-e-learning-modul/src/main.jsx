import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.jsx"
import "./index.css"
import { Flowbite } from "flowbite-react"
import { TablesProvider } from "./context/TablesProvider.jsx"
import ErrorPage from "./error-page"
import RentalMain from "./components/RentalMain"
import Editor from "./components/Editor.jsx"
import Welcome from "./components/Welcome.jsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <Welcome />, errorElement: <ErrorPage /> },
			{
				path: "/editor",
				element: <Editor />,
				errorElement: <ErrorPage />,
			},
		],
	},
	{
		path: "/rental",
		element: <RentalMain />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "kundeAnlegen", element: <div>Kunde hier anlegen</div> },
		],
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Flowbite>
			<TablesProvider>
				<RouterProvider router={router} />
			</TablesProvider>
		</Flowbite>
	</React.StrictMode>
)
