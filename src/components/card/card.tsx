import * as React from "react";

import type { User } from "../../ts/types/user-type.ts";

import style from "./card.module.scss";

const Card: React.FC<User> = user => {
	return (
		<article>
			<img
				alt={""}
				src={user.photo}
				className={style.avatar}
				height={70}
				width={70}
			/>
			<h3 className={style.title}>{user.name}</h3>
			<div className={style.textBlock}>
				<p>{user.position}</p>
				<address>
					<a href={`mailto:${user.email}`}>{user.email}</a>
					<a href={`tel:${user.phone}`}>{user.phone}</a>
				</address>
			</div>
		</article>
	);
};

export { Card };
