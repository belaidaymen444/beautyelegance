<script lang="ts">
	export let product: ProductProps;
</script>

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

<style>
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
