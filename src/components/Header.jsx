import styles from '../styles/Header.module.css';
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.logo}>Debora</div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#experiencia">Experiencia</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <div className={styles.toggle}>🌙</div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;