import "../styles/Contact.css";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import avatarImage from "../assets/avatar-image/avatar.png";

const Contact = () => {
	return (
		<div className="contact-container">
			<div className="contact-card">
				<div className="contact-content">
					<h2 className="contact-title">contáctame!</h2>
					<p className="contact-text">
						Envíame un correo electrónico a <br />
						abarcazavalad@gmail.com o déjame <br />
						un mensaje en mi redes sociales.
					</p>
					<div className="social-icons">
						<a
							href="https://x.com/isnwman10"
							className="social-icon"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaTwitter />
						</a>
						<a
							href="https://www.linkedin.com/in/debora-abarca-zavala-2068782a3/"
							className="social-icon"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedinIn />
						</a>
						<a
							href="https://github.com/deboraabarca"
							className="social-icon"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub />
						</a>
						<a href="https://github.com/deboraabarca" className="social-icon">
							<MdEmail />
						</a>
					</div>
				</div>
				<div className="avatar-container">
					<div className="avatar-background">
						<div
							className="avatar-placeholder"
							style={{
								backgroundImage: `url(${avatarImage})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						/>
					</div>
				</div>
			</div>
			<h1 className="greeting">¡Hola!</h1>
		</div>
	);
};

export default Contact;
