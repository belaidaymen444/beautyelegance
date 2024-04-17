import { writable } from 'svelte/store';
import photo1 from '$lib/assets/Sample Imgs/Products Imgs/photo_1.jpg';
import photo2 from '$lib/assets/Sample Imgs/Products Imgs/photo_2.jpg';
import photo3 from '$lib/assets/Sample Imgs/Products Imgs/photo_3.jpg';
import photo4 from '$lib/assets/Sample Imgs/Products Imgs/photo_4.jpg';
import photo5 from '$lib/assets/Sample Imgs/Products Imgs/photo_5.jpg';
import photo6 from '$lib/assets/Sample Imgs/Products Imgs/photo_6.jpg';
import photo7 from '$lib/assets/Sample Imgs/Products Imgs/photo_7.jpg';
import photo8 from '$lib/assets/Sample Imgs/Products Imgs/photo_8.jpg';
import photo9 from '$lib/assets/Sample Imgs/Products Imgs/photo_9.jpg';
import photo10 from '$lib/assets/Sample Imgs/Products Imgs/photo_10.jpg';
import photo11 from '$lib/assets/Sample Imgs/Products Imgs/photo_11.jpg';
import photo12 from '$lib/assets/Sample Imgs/Products Imgs/photo_12.jpg';
import photo13 from '$lib/assets/Sample Imgs/Products Imgs/photo_13.jpeg';
import photo14 from '$lib/assets/Sample Imgs/Products Imgs/photo_14.jpg';
import photo15 from '$lib/assets/Sample Imgs/Products Imgs/photo_15.jpg';
import photo16 from '$lib/assets/Sample Imgs/Products Imgs/photo_16.jpg';
import photo17 from '$lib/assets/Sample Imgs/Products Imgs/photo_17.jpg';
import photo18 from '$lib/assets/Sample Imgs/Products Imgs/photo_18.jpg';
import photo19 from '$lib/assets/Sample Imgs/Products Imgs/photo_19.jpg';
import photo20 from '$lib/assets/Sample Imgs/Products Imgs/photo_20.jpg';
import photo21 from '$lib/assets/Sample Imgs/Products Imgs/photo_21.jpg';
import photo22 from '$lib/assets/Sample Imgs/Products Imgs/photo_22.jpg';
import photo23 from '$lib/assets/Sample Imgs/Products Imgs/photo_23.jpg';

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
			name: 'fosca',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo13,
			name: 'ilisa',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo7,
			name: 'akicha',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo8,
			name: 'pizza',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo9,
			name: 'burger',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo12,
			name: 'burito',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo15,
			name: 'vamila',
			description: 'Masque pour cheveux 350ml',
			price: 950
		},
		{
			imgUrl: photo16,
			name: 'kasiko',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo17,
			name: 'bakin',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo18,
			name: 'maxie',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo19,
			name: 'fomate',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo20,
			name: 'procosta',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo21,
			name: 'ekasta',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo22,
			name: 'bamoda',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo23,
			name: 'zibra',
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
			name: 'pachoka',
			description: 'Fond de teint 123 30ml',
			price: 950
		}
	],
	'corps & bain': [
		{
			imgUrl: photo5,
			name: 'sadasd',
			description: 'Fond de teint 123 30ml',
			price: 950
		}
	],
	'deo & stick': [
		{
			imgUrl: photo7,
			name: 'aded',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo8,
			name: 'cseq',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo9,
			name: 'csdace',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo12,
			name: 'sdeasd',
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
			name: 'fosca',
			description: 'Fond de teint 123 30ml',
			price: 950
		},
		{
			imgUrl: photo14,
			name: 'citina',
			description: 'Fond de teint 123 30ml',
			price: 950
		}
	]
});
