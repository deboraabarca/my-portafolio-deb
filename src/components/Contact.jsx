import '../styles/Contact.css';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

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
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
              <FaLinkedinIn />
            </a>
            <a href="#" className="social-icon">
              <FaGithub />
            </a>
            <a href="#" className="social-icon">
              <MdEmail />
            </a>
          </div>
        </div>
        <div className="avatar-container">
          <div className="avatar-background">
            <div className="avatar-placeholder"></div>
          </div>
        </div>
      </div>
      <h1 className="greeting">¡Hola!</h1>
    </div>
  );
};

export default Contact; 