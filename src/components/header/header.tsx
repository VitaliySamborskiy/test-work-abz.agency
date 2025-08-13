import * as React from "react";
import { BaseButton } from "../button/baseButton.tsx";

import logo from "../../assets/img/Logo.svg";

import styles from "./header.module.scss";

const Header: React.FC = () => {
	return (
		<header>
			<div className={`${styles.block} container`}>
				<a
					href="/"
					aria-label="To the main page">
					<img
						src={logo}
						alt="company logo"
					/>
				</a>
				<nav>
					<ul>
						<li>
							<BaseButton
								text={"Users"}
								type={"submit"}></BaseButton>
						</li>
						<li>
							<BaseButton
								text={"Sign up"}
								type={"submit"}></BaseButton>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export { Header };
