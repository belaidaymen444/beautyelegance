import { writable } from 'svelte/store';
import photo1 from '$lib/assets/Sample Imgs/Products Imgs/photo_1.jpg';
import photo6 from '$lib/assets/Sample Imgs/Products Imgs/photo_6.jpg';
import photo9 from '$lib/assets/Sample Imgs/Products Imgs/photo_9.png';
import photo10 from '$lib/assets/Sample Imgs/Products Imgs/photo_10.jpg';
import photo11 from '$lib/assets/Sample Imgs/Products Imgs/photo_11.jpg';
import photo14 from '$lib/assets/Sample Imgs/Products Imgs/photo_14.png';

export const products = writable<Record<string, ProductProps[]>>({
	maquillage: [
		{
			imgUrl: photo10,
			name: 'nouba',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo11,
			name: 'bourjois',
			description: 'Rouge à lèvres mat',
			price: 1400
		},
		{
			imgUrl: photo14,
			name: 'maybelline',
			description: 'Rouge à lèvres mat',
			price: 1400
		}
	],
	others: [
		{
			imgUrl: photo1,
			name: 'nouba',
			description: 'Rouge à lèvres mat',
			price: 2000
		},
		{
			imgUrl: photo6,
			name: 'bourjois',
			description: 'Fond de teint 123 30ml',
			price: 950
		},

		{
			imgUrl: photo9,
			name: 'foo',
			description: 'Rouge à lèvres mat',
			price: 2000
		}
	]
});
