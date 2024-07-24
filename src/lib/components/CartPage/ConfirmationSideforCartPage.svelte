<script lang="ts">
	import { cart } from '$lib/stores/cart_store';
	import Product from '../Product.svelte';
	import { products } from '$lib/stores/products_store';
	import { onMount } from 'svelte';

	function calculateproductPrices(): number {
		let total = 0;
		cart.subscribe((cart) => {
			{
				cart.forEach((product) => {
					total += product.price;
				});
			}
		});
		return total;
	}
	export const TotalPrice = calculateTotalPrice();

	function calculateTotalPrice(): number {
		let totalPrice = 0;
		cart.subscribe((cart) => {
			cart.forEach((product: CartProductProps) => {
				totalPrice += product.price * product.quantity;
			});
		});

		return totalPrice;
	}
</script>

<div class="confirmation-side">
	<h1 class="total-cart-title">TOTAL PANIER</h1>

	<div>
		<h1>Sous-total</h1>
		<span
			>{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(
				calculateproductPrices()
			)} DZD</span
		>
	</div>
	<hr />
	<div>
		<h1>Expédition</h1>
		<span
			>Saisissez votre adresse pour <br />voir les options de livraison
			<br />
			<br />
			<span class="link-Calcule">
				Calculer les frais <br /> d’expédition
			</span>
		</span>
	</div>
	<hr />
	<div class="bottom-Confirmation-side">
		<div>
			<h1>Total</h1>
			<span class="total-price-confirmation">
				{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(
					calculateTotalPrice()
				)} DZD
			</span>
		</div>

		<button class="validation">VALIDER LA COMMANDE</button>
	</div>
</div>

<style>
	.confirmation-side {
		display: flex;
		border-radius: 32px;
		border: 4px solid rgba(128, 128, 128, 0.185);
		flex-direction: column;
		justify-content: space-around;
		height: 100%;
		width: 65vh;
		padding: 2rem;
		font-size: 1.5rem;
	}
	.confirmation-side div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: end;
		padding-inline: 1rem;
	}
	.confirmation-side div h1 {
		font-size: 1.8rem;
	}
	.confirmation-side .validation {
		border: none;
		background-color: hsla(0, 41%, 54%, 0.452);
		width: 100%;
		height: 7vh;
		border-radius: 50px;
		color: white;
		margin-top: 2rem;
		font-weight: 800;
		transition: 0.5s;
	}

	.confirmation-side .validation:hover {
		background-color: #b95959;
		cursor: pointer;
	}

	.total-cart-title {
		font-size: 2.1rem;
		font-weight: 800;
		margin-bottom: 2rem;
	}
	.link-Calcule {
		color: hsla(0, 41%, 54%, 0.45);
		font-weight: 700;
	}
	.bottom-Confirmation-side {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	.bottom-Confirmation-side div {
		display: flex;
		width: 100%;
	}
	.total-price-confirmation {
		color: hsla(0, 41%, 54%, 0.45);
		font-size: 2rem;
		font-weight: 700;
		-webkit-text-stroke: rgb(77, 77, 77) 0.1px;
	}
	hr {
		border: solid 1px rgba(128, 128, 128, 0.185);
	}
	@media (min-width: 660px) and (max-width: 1050px) {
		.confirmation-side {
			display: flex;
			flex-direction: column;
			width: 100%;
		}
		.confirmation-side .validation {
			margin-top: 0rem;
		}
		.bottom-Confirmation-side {
			margin-top: 2rem;
		}
	}
	@media (max-width: 660px) {
		.confirmation-side {
			width: 100%;
		}
		.confirmation-side .validation {
			margin-top: 0rem;
		}
		.bottom-Confirmation-side {
			margin-top: 2rem;
		}
	}
</style>
