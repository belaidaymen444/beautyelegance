<script lang="ts">
	import closeIcon from '$lib/assets/icons/close.png';
	import cartIcon from '$lib/assets/icons/shopping-cart.png';
	import { cart } from '$lib/stores/cart_store';
	import { products } from '$lib/stores/products_store';
</script>

<div class="cart">
	<div class="cart__top-container">
		<img src={cartIcon} alt="panier" />
		<h2>Panier</h2>
		<button class="close-btn">
			<img src={closeIcon} alt="close" />
		</button>
	</div>

	<div class="cart__products-container">
		{#if $cart.length === 0}
			<p class="cart__empty-cart-text">votre panier est vide</p>
		{/if}

		{#each $products['cheveux'].slice(1, 4) as product (product.name)}
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
							<div class="cart__product-quantity">30</div>
							<button class="add-btn">+</button>
						</div>

						<button class="cart__supprimer-btn">Supprimer</button>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.cart {
		height: 100%;
		position: fixed;
		background: #fff;
		right: 0;
		top: 0;
		width: 40rem;
		z-index: 9;
		border-left: 0.3rem solid #0008;
		display: grid;
		grid-template-rows: 10rem auto;
	}

	.cart__top-container {
		display: flex;
		align-items: center;
		background: #c6b0b0;
		padding-inline: 2rem;
		border-bottom: 0.2rem solid #0008;
	}

	.cart__top-container img[alt='panier'] {
		transform: rotateY(180deg);
		width: 4rem;
		height: 4rem;
	}

	.cart__top-container h2 {
		font-weight: lighter;
	}

	.cart__top-container .close-btn {
		background: none;
		border: none;
		margin-left: auto;
		position: relative;
		top: 0.5rem;
		cursor: pointer;
	}
	.cart__top-container img[alt='close'] {
		width: 2.7rem;
	}

	.cart__products-container {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}

	.cart__empty-cart-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 2rem;
		display: none;
	}

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
