import React, { useState } from "react";
import "../../Components/Accordion/Accordion.css";

const Accordion = ({ type, description, equipments }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='accordion'>
			<div className='accordion-header' onClick={toggleAccordion}>
				<span className='accordion-header__title'>
					{type === "description" ? "Description" : "Équipements"}
				</span>
				<span
					className={`accordion-header__icon ${isOpen ? "icon-active" : ""}`}
				></span>
			</div>

			<div
				className={`accordion-content ${
					isOpen ? "accordion-content-open" : ""
				}`}
			>
				{type === "description" ? (
					<p className='accordion-content__text'>{description}</p>
				) : (
					<ul className='accordion-content__list'>
						{equipments.map((item) => (
							<li className='accordion-content__text'>{item}</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default Accordion;
