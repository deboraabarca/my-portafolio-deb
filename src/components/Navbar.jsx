
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">DeJota</div>
      <div className="nav-links">
        <a href="#experiencia">Experiencia</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#proyectos">Proyectos</a>
        <div className="theme-toggle">🌙</div>
      </div>
    </nav>
  );
};

export default Navbar;
