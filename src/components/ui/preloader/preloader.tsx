import * as React from "react";

import type { LoaderProps } from "./types/type.ts";

import loaderImg from "../../../assets/img/loader.svg";

import style from "./preloader.module.scss";

const Preloader: React.FC<LoaderProps> = ({ isLoading }) => {
	if (!isLoading) return null;

	return (
		<div
			className={style.loaderOverley}
			role={"status"}
			aria-live={"polite"}
			aria-label={"Loading content"}>
			<img
				src={loaderImg}
				className={style.loaderSpine}
				alt={"Loading content"}
				aria-hidden={true}
			/>
		</div>
	);
};

export { Preloader };
