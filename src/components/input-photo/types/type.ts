import type { UseFormRegisterReturn } from "react-hook-form";

type InputPhotoProps = {
	label: string;
	id: string;
	type: string;
	register: UseFormRegisterReturn;
	error?: string;
};

export type { InputPhotoProps };
