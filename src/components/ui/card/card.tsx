import * as React from "react";
import { useState } from "react";

import type { CardPropsType } from "./types/type.ts";

import avatarUser from "../../../assets/img/photo-cover.svg";

import style from "./card.module.scss";

const Card: React.FC<CardPropsType> = ({ user }) => {
	const [isShow, setIsShow] = useState<boolean>(false);
	const [positionMouse, setPositionMouse] = useState<Record<string, number>>({ x: 0, y: 0 });

	const handelPhoneMask = (phone: string): string => {
		const digits = phone.replace(/\D/g, "");
		return digits.replace(/^(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/, "+$1 ($2) $3 $4 $5");
	};

	return (
		<article className={style.card}>
			<img
				alt={"avatar"}
				src={
					user.photo.match(/^(https?:\/\/[^\/]+\/images\/users)\/[^\/]+\.(?:jpg|jpeg)$/i)
						? user.photo
						: avatarUser
				}
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
						href={`mailto:${user.email}`}
						onMouseEnter={() => setIsShow(true)}
						onMouseLeave={() => setIsShow(false)}
						onMouseMove={e => setPositionMouse({ x: e.clientX, y: e.clientY })}>
						{user.email}
					</a>
					<span
						className={`${style.tooltip} ${isShow ? "" : "hide"}`}
						style={{
							top: positionMouse.y + 22,
							left: positionMouse.x + -12,
						}}>
						{user.email}
					</span>
					<a
						className={style.phone}
						href={`tel:${user.phone}`}>
						{handelPhoneMask(user.phone)}
					</a>
				</address>
			</div>
		</article>
	);
};

export { Card };
