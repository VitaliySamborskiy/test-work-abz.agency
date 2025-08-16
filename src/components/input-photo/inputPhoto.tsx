import * as React from "react";
import style from "../radio-input/radioInput.module.scss";
import type { InputPhotoProps } from "./types/type.ts";
import styles from "./inputPhoto.module.scss";

const InputPhoto: React.FC<InputPhotoProps> = ({ label, id, type, register, error }) => {
	return (
		<div className={style.block}>
			<label
				className={style.label}
				htmlFor={id}>
				<input
					className={style.radio}
					type={type}
					accept="jpg/jpeg"
					id={id}
					{...register}
				/>
				{label}
			</label>
			{error && <span className={styles.error}>{error}</span>}
		</div>
	);
};

export { InputPhoto };
