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
	<button class="ajouter-btn">Ajouter</button>
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
		width: 35rem;
		height: 35rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #fafafa;
		margin-bottom: 1.5rem;
	}
	.product-img-container img {
		width: 15rem;
		mix-blend-mode: multiply;
	}

	.ajouter-btn {
		font-family: 'Andada Pro';
		color: #000;
		text-decoration: none;
		font-size: 2rem;
		background: #f1dada;
		padding: 0.5em 2.7em;
		transition: 0.3s;
		outline: 0.2rem solid transparent;
		display: block;
		border: none;
		margin: auto;
		margin-top: 4rem;
		cursor: pointer;
		width: 100%;
	}
	.ajouter-btn:hover {
		--text-color: #eec8c8;
		outline-color: var(--text-color);
		background: #fff;
		color: var(--text-color);
	}
</style>
