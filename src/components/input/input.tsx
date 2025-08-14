import * as React from "react";

import styles from "./input.module.scss";
import type { InputProps } from "./types/type.ts";

const Input: React.FC<InputProps> = ({ type, label, id, register, error }) => {
	return (
		<div className={styles.inputBlock}>
			<label
				className={styles.label}
				htmlFor={id}>
				{label}
			</label>
			<input
				className={styles.input}
				id={id}
				type={type}
				{...register}></input>
			{error && <span className={styles.error}>{error}</span>}
		</div>
	);
};

export { Input };
