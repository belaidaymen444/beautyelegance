// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	declare interface Product {
		imgUrl: string;
		name: string;
		description: string;
		price: number;
	}
}

export {};
