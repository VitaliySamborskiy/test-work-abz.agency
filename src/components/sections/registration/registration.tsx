import * as React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Notify } from "notiflix";

import type { AxiosError } from "axios";
import type { Position, PositionsResponse } from "../../../shared/types/positions-type.ts";
import type { FormValues } from "../../../shared/types/form-registrarion-value.ts";
import type { RegistrationPropsType } from "./types/type.ts";
import type { RegisterTokenType } from "../../../shared/types/register-token-type.ts";
import type {
	SuccessResponse,
	UserErrorResponseType,
} from "../../../shared/types/user-response-type.ts";
import type { ErrorResponse } from "../../../shared/types/response-error.ts";

import { EndPointEnum } from "../../../shared/enum/end-point-enum.ts";

import { RadioInput, Input, BaseButton, InputFile } from "../../components.tsx";

import { apiRequest } from "../../../shared/api";
import { formFieldsConfig, formFieldsPhotoConfig } from "../../../configs/form-fields-config.ts";

import style from "./registration.module.scss";

const Registration: React.FC<RegistrationPropsType> = ({ setReloadTrigger }) => {
	const [positions, setPositions] = useState<Position[]>([]);

	const {
		register,
		control,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormValues>({
		mode: "all",
	});

	const onSubmit = async (data: FormValues) => {
		try {
			const token = await apiRequest<RegisterTokenType>({
				endpoint: EndPointEnum.TOKEN,
				method: "POST",
			});

			const formData = new FormData();
			formData.append("name", data.name);
			formData.append("email", data.email);
			formData.append("phone", data.phone.replace(/[^\d+]/g, "").trim());
			formData.append("position_id", data.position_id);
			formData.append("photo", data.photo[0]);

			const response: SuccessResponse = await apiRequest({
				endpoint: EndPointEnum.USERS,
				method: "POST",
				headers: {
					Token: token.token,
				},
				data: formData,
			});

			setReloadTrigger(prev => prev + 1);
			Notify.success(response.message);
		} catch (error) {
			const err = error as AxiosError<UserErrorResponseType>;
			console.log(err);
			if (err.response) {
				Notify.failure(err.response.data.message);
			} else {
				Notify.failure(err.message);
			}
		}
	};

	const fetchPositions = async () => {
		try {
			const response = await apiRequest<PositionsResponse>({
				endpoint: EndPointEnum.POSITIONS,
			});
			setPositions(response.positions);
		} catch (error) {
			const err = error as AxiosError<ErrorResponse>;
			Notify.failure(err.message);
		}
	};

	useEffect(() => {
		void fetchPositions();
	}, []);

	return (
		<section
			className={`container ${style.registration}`}
			id="registration">
			<h2 className={style.title}>Working with POST request</h2>
			<form
				className={style.form}
				onSubmit={handleSubmit(onSubmit)}>
				<fieldset className={style.inputBlock}>
					{formFieldsConfig.map(field => (
						<Input<FormValues>
							key={field.name}
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
					<legend className={style.radioInputsTitle}>Select your position</legend>
					{positions.map(position => (
						<RadioInput
							position={position}
							register={register("position_id", { required: "Please select your position" })}
							key={position.name}
						/>
					))}
				</fieldset>
				<fieldset className={style.inputBlock}>
					<InputFile
						label={formFieldsPhotoConfig.label}
						id={formFieldsPhotoConfig.name}
						type={formFieldsPhotoConfig.type}
						accept={formFieldsPhotoConfig.accept}
						register={register(formFieldsPhotoConfig.name, formFieldsPhotoConfig.rules)}
						error={errors[formFieldsPhotoConfig.name]?.message}
					/>
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
