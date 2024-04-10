<script lang="ts">
	import HeaderTopContainer from '$lib/components/HeaderTopContainer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import CompaniesSlider from '$lib/components/CompaniesSlider.svelte';
	import ScrollDownArrow from '$lib/components/ScrollDownArrow.svelte';
	import logo from '$lib/assets/logo.png';
	import '../app.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
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
</main>

<style>
	main {
		border: 0.2rem solid rgb(243, 243, 243);
		border-right: none;
		border-left: none;
		margin-top: 1.5rem;
	}

	main > h3:first-child {
		text-align: center;
		font-weight: lighter;
		letter-spacing: 0.3rem;
	}
</style>
