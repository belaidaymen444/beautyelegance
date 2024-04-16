import { writable } from 'svelte/store';

export const cart = writable<(ProductProps & { quantity: number })[]>([]);
