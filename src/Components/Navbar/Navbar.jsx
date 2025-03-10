import React from "react";
import { Link, NavLink } from "react-router";
import "../Navbar/Navbar.css";
import LogoColor from "../../assets/logo-color.svg";

const Navbar = () => {
	return (
		<nav className='nav'>
			<NavLink to='/kasa-lodging-practice-website/'>
				<figure className='nav__logo-figure'>
					<img src={LogoColor} alt='Logo de Kasa' className='nav__logo-img' />
				</figure>
			</NavLink>
			<ul className='nav__list'>
				<NavLink
					to='/kasa-lodging-practice-website/'
					end
					className={({ isActive }) =>
						isActive ? "nav__link active" : "nav__link"
					}
				>
					Accueil
				</NavLink>
				<NavLink
					to='/kasa-lodging-practice-website/about'
					className={({ isActive }) =>
						isActive ? "nav__link active" : "nav__link"
					}
				>
					À Propos
				</NavLink>
			</ul>
		</nav>
	);
};

export default Navbar;
