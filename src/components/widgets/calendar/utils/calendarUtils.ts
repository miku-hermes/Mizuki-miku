export function getFirstDayOfMonth(year: number, month: number): number {
	return (new Date(year, month, 1).getDay() + 6) % 7;
}

export function getDaysInMonth(year: number, month: number): number {
	return new Date(year, month + 1, 0).getDate();
}

export function formatDateKey(
	year: number,
	month: number,
	day: number,
): string {
	return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export function isToday(
	year: number,
	month: number,
	day: number,
	todayYear: number,
	todayMonth: number,
	todayDate: number,
): boolean {
	return year === todayYear && month === todayMonth && day === todayDate;
}
