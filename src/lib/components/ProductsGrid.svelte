<script lang="ts">
	import { products } from '$lib/stores/products_store';
	import LeftArrow from './LeftArrow.svelte';
	import RightArrow from './RightArrow.svelte';
	import Product from './Product.svelte';

	export let productsCategory: string;

	let i = 0;
	let productsLength = $products[productsCategory.toLowerCase()].length;

	function moveToRight() {
		if (-i !== Math.ceil(productsLength / 3) - 1) {
			i--;

			return;
		}

		i = 0;
	}

	function moveToLeft() {
		if (i !== 0) {
			i++;

			return;
		}

		i = -(Math.ceil(productsLength / 3) - 1);
	}
</script>

<h2 class="products-category-title">{productsCategory}</h2>
<div class="products-container">
	<LeftArrow on:click={moveToLeft} />
	<RightArrow on:click={moveToRight} />

	{#each { length: Math.ceil(productsLength / 3) } as _, j (j)}
		<div class="slide" style="transform: translateX({i * 100}%);">
			<!-- Use only 3 products per slide -->
			{#each $products[productsCategory.toLowerCase()].slice(j * 3, j * 3 + 3) as product (product.name)}
				<Product {product} />
			{/each}
		</div>
	{/each}

	<div class="bullets-container">
		{#each { length: Math.ceil(productsLength / 3) } as _, j (j)}
			<button on:click={() => (i = -j)} class="bullet" class:active-slide-bullet={Math.abs(i) === j}
			></button>
		{/each}
	</div>
</div>

<style>
	.products-category-title {
		font-family: 'Abril Fatface';
		text-transform: uppercase;
		font-weight: lighter;
		text-align: center;
		margin-top: 3rem;
	}

	.products-container {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		margin-bottom: 5rem;
		overflow: hidden;
		position: relative;
		min-height: 60rem;
	}
	.slide {
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		flex-wrap: wrap;
		flex: 1 0 100%;
		transition: transform 0.5s;
	}

	.bullets-container {
		background: orange;
		position: absolute;
		bottom: 0%;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 1rem;
		padding: 0.7rem;
		border-radius: 1.2rem;
		background: rgb(255, 243, 237);
	}
	.bullet {
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		border: none;
		background: #fff;
		cursor: pointer;
	}
	.active-slide-bullet {
		background: #fa9;
	}
</style>
