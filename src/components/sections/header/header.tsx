import * as React from "react";

import logo from "../../../assets/img/Logo.svg";

import styles from "./header.module.scss";
import styleButton from "../../ui/button/button.module.scss";

const Header: React.FC = () => {
	return (
		<header>
			<div className={`${styles.block} container`}>
				<a
					href={"#top"}
					aria-label="To the main page">
					<img
						src={logo}
						alt="company logo"
						loading="lazy"
						height={26}
						width={104}
					/>
				</a>
				<nav>
					<ul>
						<li>
							<a
								href={"#users"}
								className={styleButton.btn}
								aria-label={"Scroll to users section"}>
								Users
							</a>
						</li>
						<li>
							<a
								href={"#registration"}
								className={styleButton.btn}
								aria-label="Scroll to sign up section">
								Sign up
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export { Header };
