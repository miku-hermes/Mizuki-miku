/**
 * useFloatingTOC - Custom hooks for FloatingTOC component
 */

/**
 * Update progress ring SVG stroke-dashoffset
 * @param circle - The SVG circle element
 * @param progress - Scroll progress (0 to 1)
 */
export function updateProgressRing(
	circle: SVGCircleElement,
	progress: number,
): void {
	const radius = circle.r.baseVal.value;
	const circumference = radius * 2 * Math.PI;
	const offset = Math.max(
		0,
		Math.min(circumference, circumference - progress * circumference),
	);
	circle.style.strokeDashoffset = offset.toString();
}
