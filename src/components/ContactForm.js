import React, {useRef, useState} from 'react';
import '../assets/styles.css';
import * as emailjs from "@emailjs/browser";

const ContactForm = () => {
	const form = useRef(null);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const templateParams = {
		to_name: 'Arsen',
		from_name: name,
		message: message,
		from_email: email,
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('arsenzuna01', 'email_template1',  form.current, {
				templateParams
			})
			.then(
				() => {
					console.log('SUCCESS!');
					alert("Thank you for contacting me! Your message has been delivered and I will be in touch with you ASAP.")
				},
				(error) => {
					console.log('FAILED...', error.text);
					alert("Unfortunately, your message was not delivered. Come back soon or try contacting me through your phone number.")
				},
			);
	};

	return (
		<div className="form-container">
			<div className="form-card1">
				<div className="form-card2">
					<form className="form" ref={form} onSubmit={sendEmail}>
						<p className="form-heading">Contact Me</p>

						<div className="form-field">
							<input
								required=""
								placeholder="Name"
								className="input-field"
								value={name}
								onChange={(e) => setName(e.target.value)}
								type="text"/>
						</div>

						<div className="form-field">
							<input
								required=""
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="input-field"
								type="email"
							/>
						</div>

						<div className="form-field">
        <textarea
					required=""
					placeholder="Message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					cols="30"
					rows="3"
					className="input-field"
				></textarea>
						</div>
						<input className="sendMessage-btn" value="Send Message" type="submit"/>
					</form>
				</div>
			</div>
		</div>
	)

}

export default ContactForm;