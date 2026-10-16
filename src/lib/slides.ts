import type { asset } from '$app/paths';

export type Slide = {
	src: Parameters<typeof asset>[0];
	alt: string;
	credit?: { name: string; url: string };
};

export const slides: Slide[] = [
	{
		src: 'assets/photos/oilfield.jpg',
		alt: 'An oil pumpjack silhouetted against an amber sunset',
		credit: {
			name: 'Zbynek Burival / Unsplash',
			url: 'https://unsplash.com/photos/GrmwVnVSSdU'
		}
	}
];
