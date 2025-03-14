import "../styles/Proyects.css";
import bentrogridImage from "../assets/Proyects-images/bentogrid.png";
import socialPreviewImage from "../assets/Proyects-images/social.png";
import sunnysideImage from "../assets/Proyects-images/sunnyside.png";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
	return (
		<div className="projects-container">
			<h1 className="projects-title">Proyectos</h1>

			<div className="project-card">
				<div className="project-image-container">
					<img
						src={bentrogridImage}
						alt="Bentrogrid / Galery"
						className="project-image"
					/>
					<div className="overlay" />
				</div>
				<div className="project-info">
					<h2 className="project-name">Bentrogrid / Galery</h2>
					<p className="project-description">
						Desarrollé el prototipo de galería web utilizando un sistema de
						BentoGrid, creando un layout dinámico que organiza y presenta
						contenido de manera visualmente atractiva, adaptándose a diferentes
						tamaños de pantalla para ofrecer una experiencia de usuario óptima.
					</p>
					<a
						href="https://deboraabarca.github.io/bentogrid.proyect/"
						className="project-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						Ver más <FaArrowRight className="icon" />
					</a>
				</div>
				<div className="separator" />
			</div>

			<div className="project-card">
				<div className="project-image-container">
					<img src={sunnysideImage} alt="Sunnyside" className="project-image" />
					<div className="overlay" />
				</div>
				<div className="project-info">
					<h2 className="project-name">Sunnyside</h2>
					<p className="project-description">
						Desarrollé el prototipo de una página web para una agencia de
						diseño, con un diseño moderno y responsive que resalta los servicios
						y el portafolio de la agencia
					</p>
					<a
						href="https://deboraabarca.github.io/sunnyside/"
						className="project-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						Ver más <FaArrowRight className="icon" />
					</a>
				</div>
				<div className="separator" />
			</div>

			<div className="project-card">
				<div className="project-image-container">
					<a href="https://deboraabarca.github.io/socialproof/">
						<img
							src={socialPreviewImage}
							alt="Social Preview"
							className="project-image"
						/>
					</a>
					<div className="overlay" />
				</div>
				<div className="project-info">
					<h2 className="project-name">Social Preview</h2>
					<p className="project-description">
						Desarrollé el prototipo de una página web para mostrar pruebas
						sociales, con secciones interactivas que presentan testimonios de
						clientes para generar confianza, sobre algún producto
					</p>
					<a
						href="https://deboraabarca.github.io/socialproof/"
						className="project-link"
						target="_blank"
						rel="noopener noreferrer"
					>
						Ver más <FaArrowRight className="icon" />
					</a>
				</div>
				<div className="separator" />
			</div>
		</div>
	);
};

export default Projects;
