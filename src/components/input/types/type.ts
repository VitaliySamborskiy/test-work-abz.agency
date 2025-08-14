import type { UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
	type: string;
	id: string;
	label: string;
	register: UseFormRegisterReturn;
	error?: string;
};

export type { InputProps };
