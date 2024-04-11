<script lang="ts">
	import photo1 from '$lib/assets/Sample Imgs/Products Imgs/photo_1.jpg';
	import photo6 from '$lib/assets/Sample Imgs/Products Imgs/photo_6.jpg';
	import photo3 from '$lib/assets/Sample Imgs/Products Imgs/photo_3.jpg';
	import photo9 from '$lib/assets/Sample Imgs/Products Imgs/photo_9.png';
	import photo10 from '$lib/assets/Sample Imgs/Products Imgs/photo_10.jpg';
	import photo11 from '$lib/assets/Sample Imgs/Products Imgs/photo_11.jpg';

	export let productsCategory: string;

	const products: ProductProps[] = [
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
			{#each products.slice(j * 3, j * 3 + 3) as product (product.name)}{/each}
		</div>
	{/each}

	<div class="bullets-container">
		{#each { length: Math.ceil(products.length / 3) } as _, j (j)}
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
