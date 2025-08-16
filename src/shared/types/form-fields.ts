import type { RegisterOptions } from "react-hook-form";
import type { FormValues } from "./form-registrarion-value.ts";

type FieldConfig = {
	name: keyof FormValues;
	label: string;
	type: string;
	buttonText?: string;
	rules?: RegisterOptions<FormValues, keyof FormValues>;
};

type FieldConfigFile = Omit<FieldConfig, "rules"> & {
	rules: RegisterOptions<FormValues, keyof FormValues> | undefined;
	accept: string;
};

export type { FieldConfig, FieldConfigFile };
