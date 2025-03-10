import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "../Home/Home.css";
import { Link } from "react-router";

const Home = () => {
	const [lodgings, setLodgings] = useState();

	useEffect(() => {
		fetchLodgings();
	}, []);

	const fetchLodgings = async () => {
		try {
			const response = await fetch(`https://titi.startwin.fr/logements`);
			if (!response.ok) {
				throw new Error("Aucun logement trouvé");
			}
			const data = await response.json();
			setLodgings(data.slice(0, 6));
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<main className='home-main'>
				<Navbar />
				<header className='home-header'>
					<h1 className='home-header__title'>Chez vous, partout et ailleurs</h1>
				</header>

				<div className='lodgings-container'>
					{lodgings &&
						lodgings.map((lodging) => (
							<Link to={`/kasa-lodging-practice-website/lodging/${lodging.id}`}>
								<article
									className='lodging-card'
									style={{
										backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(255,255,255,0) 47%), url(${lodging.cover})`,
										backgroundSize: "cover",
										backgroundPosition: "center",
									}}
								>
									<h3 className='lodging-card__title'>{lodging.title}</h3>
								</article>
							</Link>
						))}
				</div>

				<Footer />
			</main>
		</>
	);
};

export default Home;
