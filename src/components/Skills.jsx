import '../styles/Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiFigma, SiAdobeillustrator, SiAdobephotoshop } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">Habilidades</h1>
      
      <div className="skills-grid">
        <div className="skills-section ux-section">
          <div className="section-title">
            <span>UX</span>
            <div className="underline"></div>
          </div>
          
          <div className="skill-item">
            <FaHtml5 className="skill-icon" />
            <span className="skill-name">HTML</span>
          </div>
          
          <div className="skill-item">
            <FaCss3Alt className="skill-icon" />
            <span className="skill-name">CSS</span>
          </div>
          
          <div className="skill-item">
            <FaJs className="skill-icon" />
            <span className="skill-name">Javascript</span>
          </div>
          
          <div className="skill-item">
            <FaReact className="skill-icon" />
            <span className="skill-name">React</span>
          </div>
          
          <div className="skill-item">
            <FaGitAlt className="skill-icon" />
            <span className="skill-name">Git</span>
          </div>
        </div>
        
        <div className="vertical-line"></div>
        
        <div className="skills-section ui-section">
          <div className="section-title">
            <span>UI</span>
            <div className="underline"></div>
          </div>
          
          <div className="skill-item">
            <span className="skill-name">Figma</span>
            <SiFigma className="skill-icon" />
          </div>
          
          <div className="skill-item">
            <span className="skill-name">Illustrator</span>
            <SiAdobeillustrator className="skill-icon" />
          </div>
          
          <div className="skill-item">
            <span className="skill-name">Photoshop</span>
            <SiAdobephotoshop className="skill-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;