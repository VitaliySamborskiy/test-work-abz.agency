import * as React from "react";

import type { RadioInputProps } from "./types/type.ts";

import style from "./radioInput.module.scss";

const RadioInput: React.FC<RadioInputProps> = ({ position, register }) => {
	return (
		<div className={style.block}>
			<label
				className={style.label}
				htmlFor={position.name}>
				<input
					checked={position.id === 1}
					type="radio"
					id={position.name}
					value={position.id}
					{...register}
				/>
				<span className={style.radioCustom}></span>
				{position.name}
			</label>
		</div>
	);
};

export { RadioInput };
