type Button = {
	text: string;
	onClick?: () => void;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
	label?: string;
	classSupport?: string | null;
	size?: string;
};

export type { Button };
