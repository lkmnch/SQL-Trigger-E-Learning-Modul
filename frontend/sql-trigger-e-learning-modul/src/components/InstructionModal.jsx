import React, { useState } from "react"
import { Modal, Button, Progress } from "flowbite-react"

function InstructionModal(props) {
	const [showInstructions, setShowInstructions] = useState(true)
	return showInstructions ? (
		<Modal
			show={props.openModal}
			onClose={() => setOpenModal(false)}
			aria-label='Modal for Instructions'>
			<Modal.Header>{props.title}</Modal.Header>

			<Modal.Body>
				{/* <Progress progress={0} /> */}
				<p className='dark:text-white'>{props.text1}</p>
				<p className='dark:text-white'>{props.text2}</p>
				<p className='dark:text-white'>{props.text3}</p>
			</Modal.Body>
			<Modal.Footer>
				{props.action ? (
					<div className='flex gap-4'>
						{props.action} {props.action2}
					</div>
				) : (
					<Button onClick={() => setShowInstructions(false)}>OK</Button>
				)}
			</Modal.Footer>
		</Modal>
	) : null
}

export default InstructionModal
