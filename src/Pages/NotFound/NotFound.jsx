import React from "react";
import { Link } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "../NotFound/NotFound.css";

const NotFound = () => {
	return (
		<>
			<main className='not-found__main'>
				<Navbar />
				<h1 className='not-found__title'>404</h1>
				<h2 className='not-found__text'>
					Oups! La page que vous demandez n'existe pas.
				</h2>
				<Link to='/' className='not-found__link-home'>
					Retourner sur la page d'accueil
				</Link>
				<Footer />
			</main>
		</>
	);
};

export default NotFound;
