import React from 'react';

export const useMousePosition = () => {
	const [mousePosition, setMousePosition] = React.useState({
		x: null,
		y: null,
	});
	React.useEffect(() => {
		const updateMousePosition = (ev) => {
			setMousePosition({ x: ev.clientX, y: ev.clientY });
		};
		window.addEventListener('mousemove', updateMousePosition);
		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
		};
	}, []);
	return mousePosition;
};

const QUERY = '(prefers-reduced-motion: no-preference)';
const isRenderingOnServer = typeof window === 'undefined';

const getInitialState = () => {
	return isRenderingOnServer ? true : !window.matchMedia(QUERY).matches;
};
export const usePrefersReducedMotion = () => {
	const [prefersReducedMotion, setPrefersReducedMotion] =
		React.useState(getInitialState);
	React.useEffect(() => {
		const mediaQueryList = window.matchMedia(QUERY);
		const listener = (event) => {
			setPrefersReducedMotion(!event.matches);
		};
		if (mediaQueryList.addEventListener) {
			mediaQueryList.addEventListener('change', listener);
		} else {
			mediaQueryList.addListener(listener);
		}
		return () => {
			if (mediaQueryList.removeEventListener) {
				mediaQueryList.removeEventListener('change', listener);
			} else {
				mediaQueryList.removeListener(listener);
			}
		};
	}, []);
	return prefersReducedMotion;
};
