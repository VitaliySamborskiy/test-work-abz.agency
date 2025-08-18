import * as React from "react";

import type { CardPropsType } from "./types/type.ts";

import style from "./card.module.scss";

const Card: React.FC<CardPropsType> = ({ user }) => {
	return (
		<article className={style.card}>
			<img
				alt={"avatar"}
				src={user.photo}
				className={style.avatar}
				height={70}
				width={70}
			/>
			<h3 className={style.title}>{user.name}</h3>
			<div className={style.textBlock}>
				<p className={style.position}>{user.position}</p>
				<address className={style.contact}>
					<a
						className={style.email}
						href={`mailto:${user.email}`}>
						{user.email}
					</a>
					<a
						className={style.phone}
						href={`tel:${user.phone}`}>
						{user.phone}
					</a>
				</address>
			</div>
		</article>
	);
};

export { Card };
