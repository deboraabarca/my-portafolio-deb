import '../styles/Header.css';
function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Debora</div>
        <nav className="nav">
          <ul>
            <li><a href="#experiencia">Experiencia</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <div className="theme-toggle">🌙</div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;