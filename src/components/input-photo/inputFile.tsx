import * as React from "react";
import { useState } from "react";
import type { InputPhotoProps } from "./types/type.ts";
import style from "./inputPhoto.module.scss";

const InputFile: React.FC<InputPhotoProps> = ({ label, id, type, accept, register, error }) => {
	const [fileNames, setFileNames] = useState<string>("");

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		setFileNames(file?.name || "");
		register.onChange(e);
	};

	return (
		<div className={`${style.block} ${error && style.errorInput}`}>
			<div className={style.inputWrapper}>
				<input
					className={style.file}
					type={type}
					accept={accept}
					id={id}
					{...register}
					onChange={handleFileChange}
				/>
				<label
					className={style.updateButton}
					htmlFor={id}>
					Upload
				</label>
				<span className={fileNames ? style.nameFile : style.textNameFile}>
					{fileNames || label}
				</span>
			</div>
			{error && <span className={style.error}>{error}</span>}
		</div>
	);
};

export { InputFile };
