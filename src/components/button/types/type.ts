type Button = {
	text: string;
	onClick?: () => void;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
	label?: string;
};

export type { Button };
