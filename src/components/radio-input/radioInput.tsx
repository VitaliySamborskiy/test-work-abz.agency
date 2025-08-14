import * as React from "react";

import type { RadioInputProps } from "./types/type.ts";

import style from "./radioInput.module.scss";

const RadioInput: React.FC<RadioInputProps> = ({ position }) => {
	return (
		<div className={style.block}>
			<label
				className={style.label}
				htmlFor={position.name}>
				{position.name}
			</label>
			<input
				className={style.radio}
				type="radio"
				name="position"
				id={position.name}
				value={position.name}
			/>
		</div>
	);
};

export { RadioInput };
