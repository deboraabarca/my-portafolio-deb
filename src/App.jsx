import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Proyects from "./components/Proyects";
import Scrolltotop from "./components/Scrolltoptop";
import Skills from "./components/Skills";

function App() {
	return (
		<div>
			<Header />
			<section id="experience">
				<Experience />
			</section>
			<section id="skills">
				<Skills />
			</section>
			<section id="projects">
				<Proyects />
			</section>
			<section id="contact">
				<Contact />
			</section>
			<Scrolltotop />
		</div>
	);
}

export default App;
