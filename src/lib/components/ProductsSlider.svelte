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
</script>

<h2 class="products-category-title">{productsCategory}</h2>
<div class="products-container">
	{#each { length: Math.ceil(products.length / 3) } as _, i}
		<div class="slide">
			<!-- Use only 3 products per slide -->
			{#each products.slice(i * 3, i * 3 + 3) as product (product.name)}
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
		margin-bottom: 9rem;
		overflow: hidden;
	}
	.slide {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		flex: 1 0 100%;
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
