export interface ButtonProps {
	type?: "button" | "submit" | "reset";
	variant?: "primary" | "secondary" | "ghost" | "outline";
	size?: "sm" | "md" | "lg";
	disabled?: boolean;
	class?: string;
}

export interface ButtonTagProps {
	size?: string;
	dot?: boolean;
	href?: string;
	label?: string;
	class?: string;
}
