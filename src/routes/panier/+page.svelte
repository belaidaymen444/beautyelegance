<script lang="ts">
	import HeaderTopContainer from '$lib/components/HeaderTopContainer.svelte';
	import deletIcon from '$lib/assets/icons/deletcartproduct.svg';
	import productImage from '$lib/assets/Sample Imgs/Products Imgs/photo_19.jpg';
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
					<tr class="details">
						<td
							><button class="delet-Button"
								><img src={deletIcon} width="13" alt="deletIcon" /></button
							></td
						>
						<td><img src={productImage} alt="" width="100" /></td>
						<td class="descraption">
							GRACIAS Shampoing sans Sulfate à l’huile de figue de Barbarie230ML
						</td>
						<td class="Prix">450.00DZD</td>
						<td>
							<div class="Qte-general-input">
								<input class="leftbt" type="button" value="+" />
								<input class="QTE" type="number" value="1" />
								<input class="rightbt" type="button" value="-" />
							</div>
						</td>
						<td class="total-Price-X-QTE">900.00 DZD</td>
					</tr>
					<tr class="details">
						<td
							><button class="delet-Button"
								><img src={deletIcon} width="13" alt="deletIcon" /></button
							></td
						>
						<td><img src={productImage} alt="" width="100" /></td>
						<td class="descraption">
							GRACIAS Shampoing sans Sulfate à l’huile de figue de Barbarie230ML
						</td>
						<td class="Prix">450.00DZD</td>
						<td>
							<div class="Qte-general-input">
								<input class="leftbt" type="button" value="+" />
								<input class="QTE" type="number" value="1" />
								<input class="rightbt" type="button" value="-" />
							</div>
						</td>
						<td class="total-Price-X-QTE">900.00 DZD</td>
					</tr>
					<tr class="details">
						<td
							><button class="delet-Button"
								><img src={deletIcon} width="13" alt="deletIcon" /></button
							></td
						>
						<td><img src={productImage} alt="" width="100" /></td>
						<td class="descraption">
							GRACIAS Shampoing sans Sulfate à l’huile de figue de Barbarie230ML
						</td>
						<td class="Prix">450.00DZD</td>
						<td>
							<div class="Qte-general-input">
								<input class="leftbt" type="button" value="+" />
								<input class="QTE" type="number" value="1" />
								<input class="rightbt" type="button" value="-" />
							</div>
						</td>
						<td class="total-Price-X-QTE">900.00 DZD</td>
					</tr>
					<tr class="details">
						<td
							><button class="delet-Button"
								><img src={deletIcon} width="13" alt="deletIcon" /></button
							></td
						>
						<td><img src={productImage} alt="" width="100" /></td>
						<td class="descraption">
							GRACIAS Shampoing sans Sulfate à l’huile de figue de Barbarie230ML
						</td>
						<td class="Prix">450.00DZD</td>
						<td>
							<div class="Qte-general-input">
								<input class="leftbt" type="button" value="+" />
								<input class="QTE" type="number" value="1" />
								<input class="rightbt" type="button" value="-" />
							</div>
						</td>
						<td class="total-Price-X-QTE">900.00 DZD</td>
					</tr>
					<tr class="details">
						<td
							><button class="delet-Button"
								><img src={deletIcon} width="13" alt="deletIcon" /></button
							></td
						>
						<td><img src={productImage} alt="" width="100" /></td>
						<td class="descraption">
							GRACIAS Shampoing sans Sulfate à l’huile de figue de Barbarie230ML
						</td>
						<td class="Prix">450.00DZD</td>
						<td>
							<div class="Qte-general-input">
								<input class="leftbt" type="button" value="+" />
								<input class="QTE" type="number" value="1" />
								<input class="rightbt" type="button" value="-" />
							</div>
						</td>
						<td class="total-Price-X-QTE">900.00 DZD</td>
					</tr>
					<tr class="details">
						<td
							><button class="delet-Button"
								><img src={deletIcon} width="13" alt="deletIcon" /></button
							></td
						>
						<td><img src={productImage} alt="" width="100" /></td>
						<td class="descraption">
							GRACIAS Shampoing sans Sulfate à l’huile de figue de Barbarie230ML
						</td>
						<td class="Prix">450.00DZD</td>
						<td>
							<div class="Qte-general-input">
								<input class="leftbt" type="button" value="+" />
								<input class="QTE" type="number" value="1" />
								<input class="rightbt" type="button" value="-" />
							</div>
						</td>
						<td class="total-Price-X-QTE">900.00 DZD</td>
					</tr>
				</tbody>
			</table>
			<div class="resposive-side">
				<table class="table-phone">
					<tr class="top-part">
						<td>
							<div>
								<button class="delet-Button"
									><img src={deletIcon} width="13" alt="deletIcon" /></button
								>
								<h1>GRACIAS Shampoing</h1>
							</div>
						</td>
						<td> <img src={productImage} alt="" width="300" /> </td>
					</tr>
					<tr class="for-descraption">
						<td id="descraption" class="descraption">
							GRACIAS Shampoing sans Sulfate à l’huile de figue de Barbarie230ML</td
						>
					</tr>
					<tr class="detail-in-phone">
						<td>PRIX : <span class="Prix">450.00DZD</span></td>
						<td
							>QUANTITE : <div class="Qte-general-input">
								<input class="leftbt" type="button" value="+" />
								<input class="QTE" type="number" value="1" />
								<input class="rightbt" type="button" value="-" />
							</div></td
						>
						<td>sous-TOTAL : <span class="total-Price-X-QTE">900.00 DZD</span></td>
					</tr>
				</table>
			</div>

			<div class="confirmation-side">
				<h1 class="total-cart-title">TOTAL PANIER</h1>

				<div>
					<h1>Sous-total</h1>
					<span>450.00DZD</span>
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
						<span class="total-price-confirmation">900.00DZD</span>
					</div>

					<button class="validation">VALIDER LA COMMANDE</button>
				</div>
			</div>
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
	.Prix {
		color: #777777;
		display: flex;
		justify-content: center;
	}
	.Qte-general-input {
		display: flex;
		align-items: center;
		justify-content: center;
		border-collapse: collapse;

		overflow: hidden;
		width: 12vh;
		height: 7vh;

		font-size: 2rem;
	}
	.Qte-general-input input[type='button'] {
		display: flex;
		border: 2px solid rgba(128, 128, 128, 0.349);
		font-size: 1.7rem;
		width: 40%;
		outline: none;
		height: 100%;
		transition: 0.3s;
		background-color: white;
	}
	.Qte-general-input input[type='number'] {
		display: flex;
		align-items: center;
		text-align: center;
		border: none;
		width: 60%;
		height: 100%;
		outline: none;
		border-block: 2px solid rgba(128, 128, 128, 0.349);
		font-size: 1.7rem;
	}
	.Qte-general-input .rightbt {
		border-top-right-radius: 50px;
		border-bottom-right-radius: 50px;
	}
	.Qte-general-input .leftbt {
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
	}

	.Qte-general-input .leftbt:hover,
	.Qte-general-input .rightbt:hover {
		background: #b95959;
		cursor: pointer;
		border: 2px solid #b95959;
	}

	.total-Price-X-QTE {
		color: hsla(0, 41%, 54%, 0.45);
		font-weight: 800;
		-webkit-text-stroke: rgb(77, 77, 77) 0.1px;
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
