<script lang="ts">
	import HeaderTopContainer from '$lib/components/HeaderTopContainer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import CompaniesSlider from '$lib/components/CompaniesSlider.svelte';
	import ScrollDownArrow from '$lib/components/ScrollDownArrow.svelte';
	import ProductsSlider from '$lib/components/ProductsSlider.svelte';
	import logo from '$lib/assets/logo.png';
	import '../app.css';
	import FeaturesContainer from '$lib/components/FeaturesContainer.svelte';
	import InfoContainer from '$lib/components/InfoContainer.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
	<link
		href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Andada+Pro:ital@0;1&display=swap"
		rel="stylesheet"
	/>
	<link rel="shortcut icon" href={logo} type="image/x-icon" />
	<title>Beaute & Elegance</title>
</svelte:head>

<header>
	<HeaderTopContainer />
	<Navbar />
	<CompaniesSlider />
	<ScrollDownArrow />
</header>

<main id="main">
	<h3>DÉCOUVREZ!</h3>
	<ProductsSlider productsCategory="maquillage" />
	<div class="voir-plus-btn-container">
		<a href="/" class="voir-plus-btn">voir plus</a>
	</div>
</main>

<footer>
	<h2 class="footer-title">A propose de nous</h2>
	<div class="container">
		<InfoContainer />
		<FeaturesContainer />
	</div>
	<div class="copyright-container">&copy; 2024 Beaute & Elegance. All rights reserved.</div>
</footer>

<style>
	.footer-title {
		font-family: 'Abril Fatface';
		font-weight: lighter;
		text-align: center;
	}
	footer .container {
		display: flex;
		margin-top: 5rem;
		align-items: start;
		justify-content: space-evenly;
		gap: 4rem;
		flex-wrap: wrap;
		padding-inline: 3rem;
	}
	.copyright-container {
		margin-top: 8rem;
		min-height: 5rem;
		background: #f0d9d9;
		display: grid;
		place-content: center;
	}

	main {
		border: 0.2rem solid rgb(243, 243, 243);
		border-right: none;
		border-left: none;
		margin-top: 1.5rem;
		padding-bottom: 4rem;
	}

	main > h3:first-child {
		text-align: center;
		font-weight: lighter;
		letter-spacing: 0.3rem;
	}

	.voir-plus-btn-container {
		display: flex;
		justify-content: center;
		margin-bottom: 2rem;
		margin-top: 7rem;
	}
	.voir-plus-btn {
		font-family: 'Andada Pro';
		color: #000;
		text-decoration: none;
		font-size: 2rem;
		background: #f1dada;
		padding: 0.5em 2.7em;
		transition: 0.3s;
		outline: 0.2rem solid transparent;
	}
	.voir-plus-btn:hover {
		--text-color: #eec8c8;
		outline-color: var(--text-color);
		background: #fff;
		color: var(--text-color);
	}
</style>
