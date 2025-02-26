import styles from '../styles/Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_content}>
        <h1>Hola!</h1>
        <h2>Me gusta hacer cosas divertidas e interactivas con código.</h2>
        <a href="/public/cv.pdf" className={styles.contact_button} download>Descargar CV</a>
      </div>
    </section>
  );
}

export default Hero;