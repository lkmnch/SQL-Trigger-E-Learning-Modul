import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { TextInput, Label, Button, Modal } from "flowbite-react"
import AppContext from "../context/AppProvider"
import axios from "axios"
import InstructionModal from "./InstructionModal"

function NewCustomer() {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [country, setCountry] = useState("")
	const [postalCode, setPostalCode] = useState("")
	const [city, setCity] = useState("")
	const [address, setAddress] = useState("")

	const { createCustomerResponse, setCreateCustomerResponse, instructions } =
		useContext(AppContext)

	const [openModal, setOpenModal] = useState(false)

	const [customerCreated, setCustomerCreated] = useState(false)

	const handleSubmit = async (e) => {
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
		await axios
			.post("http://localhost:3000/customers", newCustomer)
			.then((response) => {
				setCreateCustomerResponse(response)
				setFirstName("")
				setLastName("")
				setEmail("")
				setPhone("")
				setCountry("")
				setPostalCode("")
				setCity("")
				setAddress("")
			})
			.then(() => setOpenModal(true))
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
								required
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
								required
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
							required
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
							required
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
							required
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
							required
							id='address'
							type='text'
							sizing='sm'
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</div>
					<Button type='submit'>Kunde anlegen</Button>
					<InstructionModal
						openModal={true}
						title={instructions.S1S2.title}
						text1={instructions.S1S2.text1}
						text2={instructions.S1S2.text2}
					/>

					<InstructionModal
						openModal={openModal}
						title={instructions.S1S2a.title}
						text1={instructions.S1S2a.text1}
						text2={instructions.S1S2a.text2}
						action={instructions.S1S2a.action}
					/>

					{/* <Modal show={openModal} onClose={() => setOpenModal(false)}>
						<Modal.Header>
							<span>{"Tutorial - Schritt [1/4]"}</span>
						</Modal.Header>
						<Modal.Body>
							<div className='space-y-6'>
								<p className='text-3xl text-center  leading-relaxed text-gray-500 dark:text-gray-400'>
									{createCustomerResponse.data}
								</p>
							</div>
						</Modal.Body>
						<Modal.Footer className='flex justify-center'>
							<Button onClick={() => setOpenModal(false)}>
								Weiteren Kunden anlegen
							</Button>

							<Link to={"/rental"}>
								<Button color='gray' onClick={() => setOpenModal(false)}>
									Zurück zum Dashboard
								</Button>
							</Link>
						</Modal.Footer>
					</Modal> */}
				</div>
			</form>
		</div>
	)
}

export default NewCustomer
