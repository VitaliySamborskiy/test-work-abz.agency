import type {
	Control,
	UseFormRegisterReturn,
	RegisterOptions,
	FieldValues,
	Path,
} from "react-hook-form";

type InputProps<T extends FieldValues = FieldValues> = {
	type: string;
	id: string;
	label: string;
	register: UseFormRegisterReturn;
	buttonText?: string | null;
	error?: string;
	rulesController?: RegisterOptions<T, Path<T>>;
	control?: Control<T> | undefined;
};

export type { InputProps };
