<script lang="ts">
	import closeIcon from '$lib/assets/icons/close.png';
	import cartIcon from '$lib/assets/icons/shopping-cart.png';
	import { cart } from '$lib/stores/cart_store';
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
		z-index: 999;
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
	}

	.cart__empty-cart-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 2rem;
	}
</style>
