<script lang="ts">
	import HeaderTopContainer from '$lib/components/HeaderTopContainer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import CompaniesSlider from '$lib/components/CompaniesSlider.svelte';
	import ScrollDownArrow from '$lib/components/ScrollDownArrow.svelte';
	import ProductsSlider from '$lib/components/ProductsSlider.svelte';
	import logo from '$lib/assets/logo.png';
	import '../app.css';
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
	<ProductsSlider productsCategory="others" />
	<div class="voir-plus-btn-container">
		<a href="/" class="voir-plus-btn">voir plus</a>
	</div>
</main>

<footer>
	<h2 class="footer-title">A propose de nous</h2>
</footer>

<style>
	.footer-title {
		font-family: 'Abril Fatface';
		font-weight: lighter;
		text-align: center;
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
