<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import facebookIcon from '$lib/assets/icons/facebook.png';
	import instagramIcon from '$lib/assets/icons/instagram.png';
</script>

<div class="info-container">
	<img src={logo} alt="logo" />

	<div class="info-text">
		<h1>Beaute & Elegance</h1>

		<ul>
			<li>boutique spécialisée dans la vente matériel et produit de coiffure et cosmétique</li>
			<li>11, avenue Chakib arselane a coté sonelgaze</li>
			<li>tél: 06 67 30 42 04</li>
		</ul>

		<ul class="social-media-icons-container">
			<li>
				<a href="https://www.facebook.com">
					<img src={facebookIcon} alt="facebook" title="facebook" />
				</a>
			</li>
			<li>
				<a href="https://www.instagram.com">
					<img src={instagramIcon} alt="instagram" title="instagram" />
				</a>
			</li>
		</ul>
	</div>
</div>

<style>
	.info-container {
		display: flex;
		align-items: start;
		gap: 7rem;
	}

	.info-text {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.info-text h1 {
		font-family: 'MoonTime';
		font-weight: lighter;
		font-size: 6.17rem;
		margin-bottom: 1.5rem;
	}
	.info-text ul:first-of-type {
		width: 23rem;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-bottom: 3rem;
	}
	ul:first-of-type li:first-child {
		font-family: 'Andada Pro';
		font-size: 1.9rem;
	}

	.social-media-icons-container {
		display: flex;
		list-style-type: none;
		gap: 1rem;
		margin-top: 1.5em;
		align-self: start;
		padding-left: 4em;
	}
	.social-media-icons-container img {
		width: 3.5rem;
		cursor: pointer;
		color: rebeccapurple;
	}
</style>
