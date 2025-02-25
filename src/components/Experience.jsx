import '../styles/Experience.css';

function Experience() {
  return (
    <section id="experiencia" className="experience">
      <h2>Experiencia</h2>
      <div className="experience-list">
        <div className="experience-item">
          <h3>Frontend Developer Intern</h3>
          <p className="experience-date">Mayo 2023 - Actual</p>
          <p className="experience-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod turpis ac nulla fermentum, eu congue ex hendrerit. Vestibulum ante ipsum primis in faucibus.
          </p>
        </div>
        
        <div className="experience-item">
          <h3>Frontend Developer Básico</h3>
          <p className="experience-date">Agosto 2022 - Marzo 2023</p>
          <p className="experience-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod turpis ac nulla fermentum, eu congue ex hendrerit. Vestibulum ante ipsum primis in faucibus.
          </p>
        </div>
        
        <div className="experience-item">
          <h3>Frontend Developer Básico</h3>
          <p className="experience-date">Febrero 2022 - Julio 2022</p>
          <p className="experience-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod turpis ac nulla fermentum, eu congue ex hendrerit. Vestibulum ante ipsum primis in faucibus.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;