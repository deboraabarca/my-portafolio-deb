
import '../styles/Header.css'; 

const Header = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-left">
        <div className="logo">Débora</div>
      </div>
      
      <div className="portfolio-right">
        <nav className="navigation">
          <ul>
            <li><a href="#experiencia">Experiencia</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#contactame">Contáctame</a></li>
          </ul>
          <div className="toggle-switch">
            <div className="toggle-circle"></div>
          </div>
        </nav>
        
        {/* Contenido principal */}
        <div className="main-content">
          <div className="greeting">
            <span className="wave-emoji">👋</span>Hola <span className="soy">soy</span> <span className="name">Débora</span>
          </div>
          
          <h1 className="headline">
            Me gusta hacer <span className="highlight">cosas</span>
            <span className="transparent">divertidas</span>
          </h1>
          
          <h1 className="headline">
            e interactivas
          </h1>
          
          <h1 className="headline">
            con código.
          </h1>
          
          <button className="download-button">
            Descargar CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;