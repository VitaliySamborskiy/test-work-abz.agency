import * as React from "react";

import heroImage from "../../../assets/img/pexels-alexandr-podvalny-1227513.webp";

import style from "./heroSection.module.scss";
import styleButton from "../../ui/button/button.module.scss";

const HeroSection: React.FC = () => {
	return (
		<section
			className={style.section}
			aria-label="hero section describing what this website is about">
			<aside
				className={style.heroImgWrapper}
				aria-hidden={true}>
				<img
					className={style.heroImg}
					src={heroImage}
					alt="background image of a field of cut wheat and sky"
					width={4256}
					height={2832}
					sizes="(max-width: 768px) 100vw, 768px"
					aria-hidden="true"
				/>
			</aside>
			<div className={style.textBlock}>
				<h1 className={style.heroTitle}>Test assignment for front-end developer</h1>
				<p className={style.heroText}>
					What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS
					with a vast understanding of User design thinking as they'll be building web interfaces
					with accessibility in mind. They should also be excited to learn, as the world of
					Front-End Development keeps evolving.
				</p>
				<a
					href={"#registration"}
					className={styleButton.btn}
					aria-label="Scroll to sign up section">
					Sign up
				</a>
			</div>
		</section>
	);
};

export { HeroSection };
