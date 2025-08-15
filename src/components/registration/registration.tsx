import * as React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import type { Position, PositionsResponse } from "../../ts/types/positions-type.ts";
import type { FormValues } from "../../ts/types/form-registrarion-value.ts";

import { EndPointEnum } from "../../ts/enum/end-point-enum.ts";

import { RadioInput, Input, BaseButton } from "../components.tsx";

import { apiRequest } from "../../ts/api";
import { formFieldsConfig } from "../../configs/form-fields-config.ts";

import style from "./registration.module.scss";

const Registration: React.FC = () => {
	const [positions, setPositions] = useState<Position[]>([]);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isValid },
	} = useForm<FormValues>({
		mode: "onChange",
	});

	useEffect(() => {
		apiRequest<PositionsResponse>({ endpoint: EndPointEnum.POSITIONS }).then(response => {
			setPositions(response.positions);
			console.log(positions);
		});
	}, []);

	const onSubmit = (data: FormValues) => {
		console.log(data);
	};

	return (
		<section className={`container ${style.registration}`}>
			<h2>Working with POST request</h2>
			<form
				className={style.form}
				onSubmit={handleSubmit(onSubmit)}>
				<fieldset className={style.inputBlock}>
					{formFieldsConfig.map(field => (
						<Input<FormValues>
							type={field.type}
							id={field.name}
							label={field.label}
							buttonText={field.buttonText}
							register={register(field.name, field.rules)}
							error={errors[field.name]?.message}
							rulesController={field.type === "tel" ? field.rules : undefined}
							control={field.type === "tel" ? control : undefined}
						/>
					))}
				</fieldset>
				<fieldset className={style.radioBlock}>
					<legend>Select your position</legend>
					{positions.map(position => (
						<RadioInput
							position={position}
							key={position.name}
						/>
					))}
				</fieldset>
				<BaseButton
					text={"Sign up"}
					type={"submit"}
					disabled={!isValid}
				/>
			</form>
		</section>
	);
};

export { Registration };
