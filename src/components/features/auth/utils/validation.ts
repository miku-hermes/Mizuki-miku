/**
 * Validation utilities for password protection
 */

export function showError(
	errorMessage: HTMLElement | null,
	message: string,
): void {
	if (errorMessage) {
		errorMessage.textContent = message;
		errorMessage.style.display = "block";
	}
}

export function hideError(errorMessage: HTMLElement | null): void {
	if (errorMessage) {
		errorMessage.style.display = "none";
	}
}
