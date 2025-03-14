import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../styles/Scrolltoptop.css";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Show button when page is scrolled down
	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	// Scroll to top function
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	// Add scroll event listener
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return (
		<>
			{isVisible && (
				<button
					type="button"
					className="scroll-to-top-btn"
					onClick={scrollToTop}
					aria-label="Scroll to top"
				>
					<FaArrowUp />
				</button>
			)}
		</>
	);
};

export default ScrollToTop;
