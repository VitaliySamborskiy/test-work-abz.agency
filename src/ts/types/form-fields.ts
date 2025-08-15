import type { RegisterOptions } from "react-hook-form";
import type { FormValues } from "./form-registrarion-value.ts";

type FieldConfig = {
	name: keyof FormValues;
	label: string;
	type: string;
	buttonText?: string;
	rules?: RegisterOptions<FormValues, keyof FormValues>;
};

export type { FieldConfig };
