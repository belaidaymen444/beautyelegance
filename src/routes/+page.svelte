<script lang="ts">
	import HeaderTopContainer from '$lib/components/HeaderTopContainer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import logo from '$lib/assets/logo.png';
	import '../app.css';
</script>

<svelte:head>
	<link rel="shortcut icon" href={logo} type="image/x-icon" />
	<title>Beaute & Elegance</title>
</svelte:head>

<header>
	<HeaderTopContainer />
	<Navbar />
</header>
