import type { FieldConfig } from "../ts/types/form-fields.ts";

const formFieldsConfig: FieldConfig[] = [
	{
		name: "userName",
		label: "Your name",
		type: "text",
		rules: {
			required: "Name is required",
			minLength: { value: 2, message: "Name must be at least 2 characters" },
			maxLength: { value: 60, message: "Name must be less than 60 characters" },
		},
	},
	{
		name: "email",
		label: "Email",
		type: "email",
		rules: {
			required: "Email is required",
			pattern: {
				value:
					/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
				message: "Invalid email format",
			},
		},
	},
	{
		name: "phone",
		label: "Phone",
		type: "tel",
		buttonText: "+38 (XXX) XXX - XX - XX",
		rules: {
			required: "Phone is required",
			pattern: {
				value: /^\+38\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}$/,
				message: "Invalid phone format",
			},
		},
	},
];

export { formFieldsConfig };
