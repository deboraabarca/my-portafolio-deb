import styles from '../styles/Skills.module.css';

function Skills() {
  return (
    <section id="habilidades" className={styles.skills}>
      <h2>Habilidades</h2>
      <div className={styles.skills_container}>
        <div className={styles.skills_table}>
          <div className={styles.skills_row}>
            <div className={styles.skills_cell + ' ' + styles.skills_label}>
              <i className={styles.skills_icon + ' ' + styles.html}></i>
              HTML
            </div>
            <div className={styles.skills_cell + ' ' + styles.skills_level}>
              <div className={styles.skills_bar+'' + styles.level_5}></div>
            </div>
          </div>
          
          <div className={styles.skills_row}>
            <div className={styles.skills_cell +' '+ styles.skills_label}>
              <i className={styles.skills_icon +''+styles.css}></i>
              CSS
            </div>
            <div className="skills-cell skills-level">
              <div className="skills-bar level-4"></div>
            </div>
          </div>
          
          <div className="skills-row">
            <div className="skills-cell skills-label">
              <i className="skills-icon js"></i>
              JavaScript
            </div>
            <div className="skills-cell skills-level">
              <div className="skills-bar level-4"></div>
            </div>
          </div>
          
          <div className="skills-row">
            <div className="skills-cell skills-label">
              <i className="skills-icon react"></i>
              React JS
            </div>
            <div className="skills-cell skills-level">
              <div className="skills-bar level-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;