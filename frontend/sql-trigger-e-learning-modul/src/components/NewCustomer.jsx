import React, { useState } from "react"
import { TextInput, Label, Button } from "flowbite-react"
import axios from "axios"

function NewCustomer() {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [country, setCountry] = useState("")
	const [postalCode, setPostalCode] = useState("")
	const [city, setCity] = useState("")
	const [address, setAddress] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		const newCustomer = {
			storeId: "1",
			active: "1",
			firstName,
			lastName,
			email,
			phone,
			country,
			postalCode,
			city,
			address,
		}
		axios.post("http://localhost:3000/customers", newCustomer)
		console.log(newCustomer)
	}

	return (
		<div className='flex gap-10 '>
			<div className='w-52 h-52 bg-white rounded-lg mt-8'>
				<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
					<title />
					<g data-name='Layer 7' id='Layer_7'>
						<path
							className='fill-slate-700'
							d='M19.75,15.67a6,6,0,1,0-7.51,0A11,11,0,0,0,5,26v1H27V26A11,11,0,0,0,19.75,15.67ZM12,11a4,4,0,1,1,4,4A4,4,0,0,1,12,11ZM7.06,25a9,9,0,0,1,17.89,0Z'
						/>
					</g>
				</svg>
			</div>
			<form onSubmit={handleSubmit}>
				<div className='flex max-w-md flex-col gap-4'>
					<div className='flex gap-4'>
						<div>
							<div className='mb-2 block'>
								<Label htmlFor='firstName' value='Vorname' />
							</div>
							<TextInput
								id='firstName'
								type='text'
								sizing='sm'
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</div>
						<div>
							<div className='mb-2 block'>
								<Label htmlFor='lastName' value='Nachname' />
							</div>
							<TextInput
								id='lastName'
								type='text'
								sizing='sm'
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>
						</div>
					</div>
					<div className='flex gap-4'>
						<div>
							<div className='mb-2 block'>
								<Label htmlFor='email' value='E-Mail' />
							</div>
							<TextInput
								id='email'
								type='text'
								sizing='sm'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<div className='mb-2 block'>
								<Label htmlFor='phone' value='Telefonnummer' />
							</div>
							<TextInput
								id='phone'
								type='text'
								sizing='sm'
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
						</div>
					</div>
					<div>
						<div className='mb-2 block'>
							<Label htmlFor='country' value='Land' />
						</div>
						<TextInput
							id='country'
							type='text'
							sizing='sm'
							value={country}
							onChange={(e) => setCountry(e.target.value)}
						/>
					</div>
					<div>
						<div className='mb-2 block'>
							<Label htmlFor='postalCode' value='Postleitzahl' />
						</div>
						<TextInput
							id='postalCode'
							type='text'
							sizing='sm'
							value={postalCode}
							onChange={(e) => setPostalCode(e.target.value)}
						/>
					</div>
					<div>
						<div className='mb-2 block'>
							<Label htmlFor='city' value='Stadt' />
						</div>
						<TextInput
							id='city'
							type='text'
							sizing='sm'
							value={city}
							onChange={(e) => setCity(e.target.value)}
						/>
					</div>
					<div>
						<div className='mb-2 block'>
							<Label htmlFor='address' value='Adresse' />
						</div>
						<TextInput
							id='address'
							type='text'
							sizing='sm'
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</div>
					<Button type='submit'>Anlegen</Button>
				</div>
			</form>
		</div>
	)
}

export default NewCustomer
