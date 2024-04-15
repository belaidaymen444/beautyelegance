import { writable } from 'svelte/store';
import photo1 from '$lib/assets/Sample Imgs/Products Imgs/photo_1.jpg';
import photo2 from '$lib/assets/Sample Imgs/Products Imgs/photo_2.jpg';
import photo3 from '$lib/assets/Sample Imgs/Products Imgs/photo_3.jpg';
import photo4 from '$lib/assets/Sample Imgs/Products Imgs/photo_4.jpg';
import photo5 from '$lib/assets/Sample Imgs/Products Imgs/photo_5.jpg';
import photo6 from '$lib/assets/Sample Imgs/Products Imgs/photo_6.jpg';
import photo7 from '$lib/assets/Sample Imgs/Products Imgs/photo_7.jpg';
import photo8 from '$lib/assets/Sample Imgs/Products Imgs/photo_8.jpg';
import photo9 from '$lib/assets/Sample Imgs/Products Imgs/photo_9.png';
import photo10 from '$lib/assets/Sample Imgs/Products Imgs/photo_10.jpg';
import photo11 from '$lib/assets/Sample Imgs/Products Imgs/photo_11.jpg';
import photo12 from '$lib/assets/Sample Imgs/Products Imgs/photo_12.jpg';
import photo13 from '$lib/assets/Sample Imgs/Products Imgs/photo_13.jpeg';
import photo14 from '$lib/assets/Sample Imgs/Products Imgs/photo_14.png';

export const products = writable<Record<string, ProductProps[]>>({
	cheveux: [
		{
			imgUrl: photo1,
			name: 'viola',
			description: 'Masque pour cheveux 350ml ',
			price: 950
		},
		{
			imgUrl: photo3,
			name: 'nouba',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo4,
			name: 'nouba',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo13,
			name: 'nouba',
			description: 'Fond de teint 123 30ml',
			price: 950
		}
	],
	visage: [
		{
			imgUrl: photo2,
			name: 'nouba',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo6,
			name: 'nouba',
			description: 'Fond de teint 123 30ml',
			price: 950
		}
	],
	'corps & bain': [
		{
			imgUrl: photo5,
			name: 'nouba',
			description: 'Fond de teint 123 30ml',
			price: 950
		}
	],
	'deo & stick': [
		{
			imgUrl: photo7,
			name: 'nouba',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo8,
			name: 'nouba',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo9,
			name: 'nouba',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo12,
			name: 'nouba',
			description: 'Fond de teint 123 30ml',
			price: 950
		}
	],
	maquillage: [
		{
			imgUrl: photo10,
			name: 'nouba',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo11,
			name: 'nouba',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo14,
			name: 'nouba',
			description: 'Fond de teint 123 30ml',
			price: 950
		}
	]
});
