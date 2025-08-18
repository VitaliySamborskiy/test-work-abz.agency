import * as React from "react";
import { useState } from "react";
import { Controller, type Path } from "react-hook-form";
import { IMaskInput } from "react-imask";

import type { FieldValues } from "react-hook-form";
import type { InputProps } from "./types/type.ts";

import styles from "./input.module.scss";

const Input = <T extends FieldValues = FieldValues>({
	type,
	label,
	id,
	register,
	error,
	buttonText = null,
	rulesController = undefined,
	control = undefined,
}: InputProps<T>): React.ReactElement => {
	const [focus, setFocus] = useState<boolean>(false);
	const [isValue, setIsValue] = useState<boolean>(false);

	return (
		<div className={styles.inputBlock}>
			<label
				className={`${styles.label} ${error && styles.errorLabel} ${focus || isValue ? styles.labelFocus : ""}`}
				htmlFor={id}>
				{label}
			</label>
			{type === "tel" ? (
				<Controller
					name={register.name as Path<T>}
					control={control}
					rules={rulesController}
					render={({ field }) => (
						<IMaskInput
							className={`${styles.input} ${error && styles.errorInput}`}
							mask="+38 (000) 000 00 00"
							{...field}
							id={id}
							onFocus={() => setFocus(true)}
							onBlur={() => setFocus(false)}
							onAccept={(value: string) => {
								field.onChange(value);
								setIsValue(!!value.replace(/\D/g, ""));
							}}
						/>
					)}></Controller>
			) : (
				<input
					className={`${styles.input} ${error && styles.errorInput}`}
					id={id}
					type={type}
					{...register}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					onChange={e => {
						setIsValue(!!e.target.value.trim());
						register.onChange(e);
					}}></input>
			)}

			{buttonText && (
				<span className={`${styles.buttonText} ${error && "hide"}`}>{buttonText}</span>
			)}
			{error && <span className={styles.error}>{error}</span>}
		</div>
	);
};

export { Input };
