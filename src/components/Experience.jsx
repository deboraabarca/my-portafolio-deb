import styles from '../styles/Experience.module.css';

function Experience() {
  return (
    <section id="experiencia" className={styles.experience}>
      <div className={styles.experience_list}>
        <div className={styles.experience_item}>
        <h2>Experiencia</h2>
          <h3>Frontend Developer Intern</h3>
          <p className={styles.experience_date}>Mayo 2023 - Actual</p>
          <p className={styles.experience_description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod turpis ac nulla fermentum, eu congue ex hendrerit. Vestibulum ante ipsum primis in faucibus.
          </p>
        </div>
        
        <div className={styles.experience_item}>
          <h3>Frontend Developer Básico</h3>
          <p className={styles.experience_date}>Agosto 2022 - Marzo 2023</p>
          <p className={styles.experience_description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod turpis ac nulla fermentum, eu congue ex hendrerit. Vestibulum ante ipsum primis in faucibus.
          </p>
        </div>
        
        <div className={styles.experience_item}>
          <h3>Frontend Developer Básico</h3>
          <p className={styles.experience_date}>Febrero 2022 - Julio 2022</p>
          <p className={styles.experience_description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod turpis ac nulla fermentum, eu congue ex hendrerit. Vestibulum ante ipsum primis in faucibus.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;