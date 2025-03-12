import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Forms.css";

export const ContactUs = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_19v90rc", "template_ne1nsfp", form.current, {
				publicKey: "DKnyo9YvfCz-vHHW4",
			})
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				},
			);
	};

	return (
		<div className="form-container">
			<form ref={form} onSubmit={sendEmail}>
				<div className="input-row">
					<div className="input-group">
						<input
							type="text"
							id="name"
							name="user_name"
							placeholder="Nombre"
							required
						/>
					</div>
					<div className="input-group">
						<input
							type="email"
							id="email"
							name="user_email"
							placeholder="Correo"
							required
						/>
					</div>
				</div>
				<div className="message-container">
					<textarea
						id="message"
						name="message"
						placeholder="Mensaje"
						required
					/>
				</div>
				<div className="button-container">
					<button type="submit">Enviar</button>
				</div>
			</form>
		</div>
	);
};
export default ContactUs;
