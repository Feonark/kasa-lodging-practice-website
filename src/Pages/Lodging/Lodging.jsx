import React from "react";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Carousel from "../../Components/Carousel/Carousel";
import Accordion from "../../Components/Accordion/Accordion";
import "../Lodging/Lodging.css";

const Lodging = () => {
	const { id } = useParams();
	const [lodging, setLodging] = useState([]);
	const [loading, setLoading] = useState(true);
	const [pictures, setPictures] = useState([]);
	const [description, setDescription] = useState("");
	const [equipments, setEquipments] = useState([]);
	const [ratingFullStars, setRatingFullStars] = useState("");
	const [ratingEmptyStars, setRatingEmptyStars] = useState("");
	let navigate = useNavigate();

	useEffect(() => {
		fetchLodging();
	}, []);

	useEffect(() => {
		if (!loading && Object.values(lodging).length === 0) {
			navigate("/notfound");
		}
		if (
			lodging &&
			lodging.rating &&
			lodging.pictures &&
			lodging.description &&
			lodging.equipments
		) {
			convertRating(lodging.rating);
			setPictures(lodging.pictures);
			setDescription(lodging.description);
			setEquipments(lodging.equipments);
		}
	}, [loading, lodging]);

	const fetchLodging = async () => {
		try {
			const response = await fetch(`https://titi.startwin.fr/logements/${id}`);
			if (!response.ok) {
				throw new Error("Désolé, ce logement n'existe pas !");
			}
			const data = await response.json();
			setLodging(data);
		} catch (error) {
			console.error("Erreur lors de la récupération des données :", error);
		} finally {
			setLoading(false);
		}
	};

	const convertRating = () => {
		const fullStars = "★".repeat(lodging.rating);
		const emptyStars = "★".repeat(5 - lodging.rating);
		setRatingFullStars(fullStars);
		setRatingEmptyStars(emptyStars);
	};

	return (
		<>
			<main className='lodging-main'>
				<Navbar />
				<div>
					<Carousel data={pictures} />
				</div>
				<div className='lodging-infos'>
					<div className='lodging-info'>
						<h1 className='lodging-info__title'>{lodging.title}</h1>
						<h3 className='lodging-info__localization'>{lodging.location}</h3>
						<div className='lodging-info__chips'>
							{lodging.tags &&
								lodging.tags.map((tag) => (
									<span className='lodging-info__chip'>{tag}</span>
								))}
						</div>
					</div>

					<div className='lodging-ratings'>
						<div className='lodging-ratings__stars'>
							<span className='lodging-ratings__full-stars'>
								{ratingFullStars}
							</span>
							<span className='lodging-ratings__empty-stars'>
								{ratingEmptyStars}
							</span>
						</div>
						<div className='lodging-ratings__owner'>
							<span className='owner-name'>{lodging.host?.name}</span>
							<img
								className='owner-picture'
								src={`${lodging.host?.picture}`}
							></img>
						</div>
					</div>
				</div>
				<div className='lodging-accordions'>
					<Accordion type='description' description={description} />
					<Accordion type='equipments' equipments={equipments} />
				</div>
				<Footer />
			</main>
		</>
	);
};

export default Lodging;
