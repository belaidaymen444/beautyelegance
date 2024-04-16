<script lang="ts">
	export let product: ProductProps & { quantity: number };
</script>

<div class="cart__product-container">
	<img src={product.imgUrl} alt={product.name} class="cart__product-img" />

	<div class="cart__product-details-container">
		<h3>{product.name}</h3>
		<p>{product.description}</p>
		<div class="cart__price-text">
			{new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(product.price)} DZD
		</div>

		<div class="cart__product-quantity-container-and-supprimer-btn">
			<div class="cart__product-quantity-container">
				<button class="remove-btn">-</button>
				<div class="cart__product-quantity">{product.quantity}</div>
				<button class="add-btn">+</button>
			</div>

			<button class="cart__supprimer-btn">Supprimer</button>
		</div>
	</div>
</div>

<style>
	.cart__product-container {
		display: grid;
		grid-template-columns: 35% auto;
		align-items: center;
		justify-items: center;
		width: 100%;
		min-height: 18rem;
	}

	.cart__product-img {
		width: 100%;
		height: 15rem;
		object-fit: contain;
	}

	.cart__product-details-container {
		justify-self: stretch;
	}
	.cart__product-container h3 {
		font-family: 'Andada Pro';
		font-weight: lighter;
		letter-spacing: 0.2rem;
		text-transform: uppercase;
		margin-bottom: 0.2em;
	}
	.cart__product-container p {
		color: rgb(133, 133, 133);
		margin-bottom: 1em;
	}
	.cart__price-text {
		font-weight: bold;
		font-size: 1.8rem;
	}

	.cart__product-quantity-container-and-supprimer-btn {
		margin-top: 0.6em;
		display: grid;
		grid-template-columns: 38% auto;
		gap: 1rem;
	}
	.cart__product-quantity-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border: 0.2rem solid;
		font-size: 2.3rem;
		padding: 0.1em;
		height: 3.8rem;
	}
	.cart__product-quantity-container button {
		width: 2rem;
		background: none;
		border: none;
		font-size: inherit;
		cursor: pointer;
	}
	.cart__product-quantity-container button:hover {
		background: #0001;
	}
	.cart__supprimer-btn {
		--text-color: #b95959;
		outline-color: var(--text-color);
		background: #fff;
		color: var(--text-color);
		border: 1px solid;
		cursor: pointer;
		transition: 0.3s;
	}
	.cart__supprimer-btn:hover {
		background: var(--text-color);
		color: #fff;
	}
</style>
