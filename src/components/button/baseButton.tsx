import * as React from "react";
import type { Button } from "./types/type.ts";

import styles from "./buton.module.scss";
import { useEffect } from "react";

const BaseButton: React.FC<Button> = ({
	text,
	onClick,
	disabled,
	type,
	label,
	classSupport,
	size,
}) => {
	useEffect(() => {
		console.log("Button size:", size); // Має показати "large"
		console.log("classSupport:", classSupport); // Перевірте що тут
	}, [size, classSupport]);
	return (
		<button
			type={type}
			className={`${styles.btn} ${size === "large" ? styles.btnLarge : ""} ${classSupport}`}
			disabled={disabled}
			aria-label={label ? label : text}
			onClick={onClick ? () => onClick() : undefined}>
			{text}
		</button>
	);
};

export { BaseButton };
