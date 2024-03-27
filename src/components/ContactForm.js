import React, {useRef} from 'react';
import '../assets/styles.css';
import * as emailjs from "@emailjs/browser";

const ContactForm = () => {
	const form = useRef(null);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('arsenzuna01', 'email_template1', form.current, {
				publicKey: '8ytIz6sGi46Pjc10a',
			})
			.then(
				() => {
					console.log('SUCCESS!');
				},
				(error) => {
					console.log('FAILED...', error.text);
				},
			);
	};

	return (
		<div className="form-container">
			<div className="form-card1">
				<div className="form-card2">
					<form className="form" onSubmit={sendEmail}>
						<p className="form-heading">Contact Me</p>

						<div className="form-field">
							<input required="" placeholder="Name" className="input-field" type="text"/>
						</div>

						<div className="form-field">
							<input
								required=""
								placeholder="Email"
								className="input-field"
								type="email"
							/>
						</div>

						<div className="form-field">
        <textarea
					required=""
					placeholder="Message"
					cols="30"
					rows="3"
					className="input-field"
				></textarea>
						</div>
						<button className="sendMessage-btn" type="submit">Send Message</button>
					</form>
				</div>
			</div>

		</div>
	)

}

export default ContactForm;