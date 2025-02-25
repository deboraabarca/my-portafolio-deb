import '../styles/Skills.css';

function Skills() {
  return (
    <section id="habilidades" className="skills">
      <h2>Habilidades</h2>
      <div className="skills-container">
        <div className="skills-table">
          <div className="skills-row">
            <div className="skills-cell skills-label">
              <i className="skills-icon html"></i>
              HTML
            </div>
            <div className="skills-cell skills-level">
              <div className="skills-bar level-5"></div>
            </div>
          </div>
          
          <div className="skills-row">
            <div className="skills-cell skills-label">
              <i className="skills-icon css"></i>
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