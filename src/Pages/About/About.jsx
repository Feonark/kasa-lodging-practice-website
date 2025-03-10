import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Accordion from "../../Components/Accordion/Accordion";
import "../../Pages/About/About.css";

const About = () => {
	return (
		<>
			<main className='about-main'>
				<Navbar />
				<header className='about-header'>
					<h1 className='about-header__title'></h1>
				</header>
				<div className='accordions'>
					<div className='accordion'>
						<div className='accordion-header'>
							<span className='accordion-header__title'>Fiabilité</span>
							<span className='accordion-header__icon'></span>
						</div>
					</div>
					<div className='accordion'>
						<div className='accordion-header'>
							<span className='accordion-header__title'>Respect</span>
							<span className='accordion-header__icon'></span>
						</div>
					</div>
					<div className='accordion'>
						<div className='accordion-header'>
							<span className='accordion-header__title'>Service</span>
							<span className='accordion-header__icon'></span>
						</div>
					</div>
					<div className='accordion'>
						<div className='accordion-header'>
							<span className='accordion-header__title'>Sécurité</span>
							<span className='accordion-header__icon'></span>
						</div>
					</div>
				</div>
				<Footer />
			</main>
		</>
	);
};

export default About;
