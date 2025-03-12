import {
	FaBriefcase,
	FaCode,
	FaEnvelope,
	FaProjectDiagram,
} from "react-icons/fa";
import "../styles/Header.css";
import workspaceImage from "../assets/header-image/header-image.png";

const Header = () => {
	return (
		<div className="portfolio-container">
			<div className="portfolio-left">
				<div className="logo">Debora</div>
			</div>

			<div className="portfolio-right">
				<nav className="navigation">
					<ul>
						<li>
							<a href="#experience" className="desktop-nav">
								Experiencia
							</a>
							<a href="#experience" className="mobile-nav">
								<FaBriefcase /> <span>Experiencia</span>
							</a>
						</li>
						<li>
							<a href="#skills" className="desktop-nav">
								Habilidades
							</a>
							<a href="#skills" className="mobile-nav">
								<FaCode /> <span>Habilidades</span>
							</a>
						</li>
						<li>
							<a href="#projects" className="desktop-nav">
								Proyectos
							</a>
							<a href="#projects" className="mobile-nav">
								<FaProjectDiagram /> <span>Proyectos</span>
							</a>
						</li>
						<li>
							<a href="#contact" className="desktop-nav">
								Contáctame
							</a>
							<a href="#contact" className="mobile-nav">
								<FaEnvelope /> <span>Contáctame</span>
							</a>
						</li>
					</ul>
				</nav>

				<div className="main-content">
					<div className="workspace-image">
						<img src={workspaceImage} alt="Workspace" />
					</div>
					<div className="presentation">
						<span className="wave-emoji">👋</span>
						<span>
							Hola <span className="soy">soy</span>{" "}
							<span className="name">Debora</span>
						</span>
					</div>

					<div className="headline-container">
						<h1 className="headline">
							Me gusta hacer <span className="highlight">cosas</span>
							<span className="transparent"> divertidas</span>
						</h1>
						<h1 className="headline">e interactivas con código.</h1>
					</div>

					<a href="/cv.pdf" download className="download-button">
						Descargar CV
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
