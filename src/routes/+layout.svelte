<script lang="ts">
	import logo from '$lib/assets/logo.png';
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
</svelte:head>

<slot />
