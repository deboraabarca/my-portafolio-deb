import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hola!</h1>
        <h2>Me gusta hacer cosas impredecibles e interactivas con código.</h2>
        <a href="#contacto" className="contact-button">Contáctame</a>
      </div>
      <div className="hero-image">
        <div className="computer-mockup"></div>
      </div>
    </section>
  );
}

export default Hero;