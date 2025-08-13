import * as React from "react";

import style from "./heroSection.module.scss";
import heroImage from "../../assets/img/pexels-alexandr-podvalny-1227513.jpeg";

import { BaseButton } from "../components.tsx";

const HeroSection: React.FC = () => {
	return (
		<section
			className={`${style.section} container`}
			aria-label="hero section describing what this website is about">
			<aside
				className={style.heroImgWrapper}
				aria-hidden={true}>
				<img
					className={style.heroImg}
					src={heroImage}
					alt=""
					width={4256}
					height={2832}
					aria-hidden="true"
					loading="lazy"
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
				<BaseButton
					text={"Sign up"}
					type={"submit"}
				/>
			</div>
		</section>
	);
};

export { HeroSection };
