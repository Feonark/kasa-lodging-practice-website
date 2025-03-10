import React from "react";
import { useState } from "react";
import "../../Components/Carousel/Carousel.css";

const Carousel = ({ data }) => {
	const [slide, setSlide] = useState(0);

	const nextSlide = () => {
		setSlide(slide === data.length - 1 ? 0 : slide + 1);
	};

	const prevSlide = () => {
		setSlide(slide === 0 ? data.length - 1 : slide - 1);
	};

	return (
		<div className='carousel'>
			<button onClick={prevSlide} className='arrow arrow-left' />
			{data &&
				data.map((item, idx) => (
					<img
						src={item}
						key={idx}
						className={slide === idx ? "slide" : "slide slide-hidden"}
					/>
				))}
			<button onClick={nextSlide} className='arrow arrow-right' />
		</div>
	);
};

export default Carousel;
