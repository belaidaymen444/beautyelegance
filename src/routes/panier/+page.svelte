<script lang="ts">
	import HeaderTopContainer from '$lib/components/HeaderTopContainer.svelte';
	import productImage from '$lib/assets/Sample Imgs/Products Imgs/photo_19.jpg';
	import ProductForCartPage from '$lib/components/CartPage/ProductForCartPage.svelte';
	import ResposiveSideCart from '$lib/components/CartPage/ResposiveSideCart.svelte';
	import ConfirmationSideforCartPage from '$lib/components/CartPage/ConfirmationSideforCartPage.svelte';
	import { cart } from "$lib/stores/cart_store";
</script>

<svelte:head>
	<title>Panier | Beaute & Elegance</title>
</svelte:head>

<HeaderTopContainer brownBackground={true} />
<nav>
	<h1>Panier</h1>
</nav>
<main>
	<div class="container">
		<div class="product-details">
			<table class="main-table">
				<thead class="title-head-table">
					<tr class="titles">
						<th></th>
						<th class="produit-Title">PRODUIT</th>
						<th></th>
						<th></th>
						<th></th>
						<th></th>
						<th>PRIX</th>
						<th>QUANTITE</th>
						<th>sous-TOTAL</th>
					</tr>
				</thead>
				<tbody class="add-many-products">
					
			{#each $cart as product (product.name)}
			<ProductForCartPage {product} />
			{/each}

					
				</tbody>
			</table>
			<div class="resposive-side">
				<table class="table-phone">
					{#each $cart as product (product.name)}

					<ResposiveSideCart {product} />
			{/each}

					


				</table>
			</div>

			<ConfirmationSideforCartPage/>
		</div>
	</div>
</main>

<style>
	nav {
		display: flex;
		height: 7vh;
		width: 100%;

		align-items: center;
		background-color: white;
		box-shadow: 0 5px 10px rgba(128, 128, 128, 0.151);
		justify-content: center;
		z-index: -10;
	}
	nav h1 {
		font-size: 2.5rem;
		font-weight: 600;
		color: #b95959;
		opacity: 0.45;
	}
	.container {
		display: flex;
		justify-content: center;
		height: 70vh;
		gap: 2rem;
		margin: 2rem;
	}


	.titles {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.5rem;
		border-bottom: 2px solid rgba(128, 128, 128, 0.185);
	}
	.details input[type='number']::-webkit-inner-spin-button,
	.details input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
	}
	.product-details {
		display: flex;
		align-items: start;
		justify-content: space-between;
		gap: 3rem;
		margin-bottom: 1rem;
		width: 92%;
	}
	.details {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		border-bottom: 2px solid rgba(128, 128, 128, 0.185);
	}
	.main-table {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 1;

		height: 100%;
	}
	.add-many-products {
		height: 100%;
		overflow-y: auto;
	}
	.produit-Title {
		text-align: center;

		padding-left: 2rem;
	}
	.details td {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-right: 2rem;
	}
	.delet-Button {
		display: flex;
		justify-content: center;
		background: none;
		border: none;
		outline: none;
		cursor: pointer;
	}
	.descraption {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		color: #333333;
		font-weight: 600;
		width: 35%;
	}

	hr {
		border: solid 1px rgba(128, 128, 128, 0.185);
	}
	.resposive-side {
		display: none;
	}

	@media (min-width: 660px) and (max-width: 1050px) {
		.container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: start;
			height: 100vh;
		}
		.product-details {
			display: flex;
			flex-direction: column;
		}
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
		.add-many-products {
			overflow-y: auto;
		}
	}
	@media (max-width: 700px) {
		.container {
			margin: 0;
			width: 100%;
		}
		.details {
			padding: 0;
		}
	}
	@media (max-width: 660px) {
		.product-details {
			display: flex;
			flex-direction: column;
			justify-content: baseline;
			align-items: center;
			margin-top: 2rem;
		}

		.main-table {
			display: none;
		}
		.resposive-side {
			display: flex;
			flex-direction: column;
			width: 100%;
			justify-content: center;
			text-align: center;
		}

		.top-part {
			display: flex;
			flex-direction: column;
			font-size: 1.2rem;
			width: 100%;
			position: relative;
		}
		.top-part div {
			width: 100%;
			display: flex;
			align-items: center;
			text-align: center;
			justify-content: center;
		}
		.top-part div button {
			position: absolute;
			left: 5%;
		}
		.top-part div h1 {
			font-size: 2.2rem;
		}
		.for-descraption {
			display: flex;
			justify-content: center;
			text-align: center;
			align-items: center;
			width: 100%;
		}
		#descraption {
			width: 100%;
			padding: 2rem;
			border-bottom: dashed 2px rgba(128, 128, 128, 0.185);
		}
		.detail-in-phone {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: start;
			width: 100%;
		}
		.detail-in-phone td {
			display: flex;
			width: 100%;
			align-items: center;
			justify-content: space-between;
			padding: 1rem;
			border-bottom: dashed 1px rgba(128, 128, 128, 0.185);
		}
		.confirmation-side {
			width: 100%;
		}
		.detail-in-phone input[type='number']::-webkit-inner-spin-button,
		.detail-in-phone input[type='number']::-webkit-outer-spin-button {
			-webkit-appearance: none;
		}
		.confirmation-side .validation {
			margin-top: 0rem;
		}
		.bottom-Confirmation-side {
			margin-top: 2rem;
		}
	}
</style>
