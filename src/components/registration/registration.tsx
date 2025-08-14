import * as React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import type { Position, PositionsResponse } from "../../ts/types/positions-type.ts";

import { EndPointEnum } from "../../ts/enum/end-point-enum.ts";

import { RadioInput, Input } from "../components.tsx";

import { apiRequest } from "../../ts/api";

import style from "./registration.module.scss";

const Registration: React.FC = () => {
	const [positions, setPositions] = useState<Position[]>([]);

	const { register } = useForm();

	useEffect(() => {
		apiRequest<PositionsResponse>({ endpoint: EndPointEnum.POSITIONS }).then(response => {
			setPositions(response.positions);
			console.log(positions);
		});
	}, []);

	return (
		<section className={`container ${style.registr}`}>
			<h2>Working with POST request</h2>
			<form className={style.form}>
				<fieldset className={style.inputBlock}>
					<Input
						type={"text"}
						id={"name"}
						label={"Your name"}
						register={register("name", { required: "Email обов'язковий" })}
					/>
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
			</form>
		</section>
	);
};

export { Registration };
