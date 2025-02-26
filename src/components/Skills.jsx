import styles from '../styles/Skills.module.css';

function Skills() {
  return (
    <section id="habilidades" className={styles.skills}>
      <div className={styles.skills_container}>
        <h2>Habilidades</h2>
        <div className={styles.skills_table}>
          <div className={styles.skills_row}>
            <div className={`${styles.skills_cell} ${styles.skills_label}`}>
              <i className={`${styles.skills_icon} ${styles.html}`}></i>
              HTML
            </div>
            <div className={`${styles.skills_cell} ${styles.skills_level}`}>
              <div className={`${styles.skills_bar} ${styles.level_5}`}></div>
            </div>
          </div>
          
          <div className={styles.skills_row}>
            <div className={`${styles.skills_cell} ${styles.skills_label}`}>
              <i className={`${styles.skills_icon} ${styles.css}`}></i>
              CSS
            </div>
            <div className={`${styles.skills_cell} ${styles.skills_level}`}>
              <div className={`${styles.skills_bar} ${styles.level_4}`}></div>
            </div>
          </div>
          
          <div className={styles.skills_row}>
            <div className={`${styles.skills_cell} ${styles.skills_label}`}>
              <i className={`${styles.skills_icon} ${styles.js}`}></i>
              JavaScript
            </div>
            <div className={`${styles.skills_cell} ${styles.skills_level}`}>
              <div className={`${styles.skills_bar} ${styles.level_4}`}></div>
            </div>
          </div>
          
          <div className={styles.skills_row}>
            <div className={`${styles.skills_cell} ${styles.skills_label}`}>
              <i className={`${styles.skills_icon} ${styles.react}`}></i>
              React JS
            </div>
            <div className={`${styles.skills_cell} ${styles.skills_level}`}>
              <div className={`${styles.skills_bar} ${styles.level_3}`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;