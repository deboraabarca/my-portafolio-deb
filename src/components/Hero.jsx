import styles from '../styles/Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_content}>
        <h1>Hola!</h1>
        <h2>Me gusta hacer cosas impredecibles e interactivas con código.</h2>
        <a href="#contacto" className={styles.contact_button}>Contáctame</a>
      </div>
      <div className={styles.computer_mockup}>
        <div className={styles.computer_screen}></div>
      </div>
    </section>
  );
}

export default Hero;