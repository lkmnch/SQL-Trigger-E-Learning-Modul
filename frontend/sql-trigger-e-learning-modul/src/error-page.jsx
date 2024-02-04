import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
	const error = useRouteError()
	console.error(error)

	return (
		<div
			id='error-page'
			className=' flex flex-col justify-center  min-h-screen'>
			<h1 className='text-center text-7xl font-bold mb-20'>Oops!</h1>
			<p className='text-center text-2xl mb-20'>
				Sorry, an unexpected error has occurred.
			</p>
			<p className='text-center text-xl font-thin'>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	)
}
