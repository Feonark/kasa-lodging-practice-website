import React from "react";
import "../Footer/Footer.css";
import LogoWhite from "../../assets/logo-white.svg";

const Footer = () => {
	return (
		<>
			<footer className='footer'>
				<figure className='footer__logo-figure'>
					<img
						src={LogoWhite}
						alt='Logo de Kasa'
						className='footer__logo-img'
					/>
				</figure>
				<span className='footer__copyright'>
					© 2020 Kasa. All rights reserved
				</span>
			</footer>
		</>
	);
};

export default Footer;
