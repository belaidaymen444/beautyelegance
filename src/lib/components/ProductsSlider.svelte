<script lang="ts">
	import photo1 from '$lib/assets/Sample Imgs/Products Imgs/photo_1.jpg';
	import photo6 from '$lib/assets/Sample Imgs/Products Imgs/photo_6.jpg';
	import photo3 from '$lib/assets/Sample Imgs/Products Imgs/photo_3.jpg';
	import photo9 from '$lib/assets/Sample Imgs/Products Imgs/photo_9.jpg';
	import photo10 from '$lib/assets/Sample Imgs/Products Imgs/photo_10.jpg';
	import photo11 from '$lib/assets/Sample Imgs/Products Imgs/photo_11.jpg';

	export let productsCategory: string;

	interface Product {
		imgUrl: string;
		name: string;
		description: string;
		price: number;
	}

	const products: Product[] = [
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
	];
	let i = 0;

	function moveToRight() {
		if (-i !== Math.ceil(products.length / 3) - 1) {
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

		i = -(Math.ceil(products.length / 3) - 1);
	}
</script>

<h2 class="products-category-title">{productsCategory}</h2>
<div class="products-container">
	<button class="arrow left-arrow" on:click={moveToLeft}></button>
	<button class="arrow right-arrow" on:click={moveToRight}></button>

	{#each { length: Math.ceil(products.length / 3) } as _, j (j)}
		<div class="slide" style="transform: translateX({i * 100}%);">
			<!-- Use only 3 products per slide -->
			{#each products.slice(j * 3, j * 3 + 3) as product (product.name)}
				<div class="product-details-container">
					<div class="product-img-container">
						<img src={product.imgUrl} alt={product.name} />
					</div>
					<h3>{product.name}</h3>
					<p>{product.description}</p>
					<span
						>{new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(product.price)} DZD</span
					>
				</div>
			{/each}
		</div>
	{/each}
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
	.arrow {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 3rem;
		height: 3rem;
		border: 0.4rem solid #000;
		background: none;
		cursor: pointer;
		z-index: 1;
	}
	.left-arrow {
		left: 4rem;
		border-top: none;
		border-right: none;
		transform: rotate(45deg);
	}
	.right-arrow {
		right: 4rem;
		border-left: none;
		border-bottom: none;
		transform: rotate(45deg);
	}
	.slide {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		flex: 1 0 100%;
		transition: transform 0.5s;
	}

	.product-details-container {
		text-align: center;
	}
	.product-details-container h3 {
		font-family: 'Andada Pro';
		font-weight: lighter;
		letter-spacing: 0.2rem;
		text-transform: uppercase;
		color: rgb(133, 133, 133);
		margin-bottom: 1rem;
	}
	.product-img-container {
		width: 20rem;
		min-height: 40rem;
		display: flex;
		align-items: flex-end;
	}
	.product-img-container img {
		margin-bottom: 1.5rem;
		width: 100%;
		mix-blend-mode: multiply;
	}
</style>
