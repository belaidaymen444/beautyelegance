import { writable } from 'svelte/store';
import photo1 from '$lib/assets/Sample Imgs/Products Imgs/photo_1.jpg';
import photo6 from '$lib/assets/Sample Imgs/Products Imgs/photo_6.jpg';
import photo3 from '$lib/assets/Sample Imgs/Products Imgs/photo_3.jpg';
import photo9 from '$lib/assets/Sample Imgs/Products Imgs/photo_9.png';
import photo10 from '$lib/assets/Sample Imgs/Products Imgs/photo_10.jpg';
import photo11 from '$lib/assets/Sample Imgs/Products Imgs/photo_11.jpg';

export const products = writable<ProductProps[]>([
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
		imgUrl: photo3,
		name: 'maybelline',
		description: 'Rouge à lèvres mat',
		price: 1400
	},
	{
		imgUrl: photo9,
		name: 'foo',
		description: 'Rouge à lèvres mat',
		price: 2000
	},
	{
		imgUrl: photo10,
		name: 'bar',
		description: 'Fond de teint 123 30ml',
		price: 950
	},
	{
		imgUrl: photo11,
		name: 'baz',
		description: 'Rouge à lèvres mat',
		price: 1400
	}
]);
