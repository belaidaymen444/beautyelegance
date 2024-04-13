<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import loginIcon from '$lib/assets/icons/add-user.png';
	import searchIcon from '$lib/assets/icons/search.png';
	import cartIcon from '$lib/assets/icons/shopping-cart.png';
	import MediaQuery from 'svelte-media-queries';
	import { shouldVerticalNavbarAppear } from '$lib/stores/navbar_visibility_store';
</script>

<MediaQuery query="(max-width: 950px)" let:matches>
	<div class="container">
		{#if matches}
			<h1>Beaute & Elegance</h1>
			<div class="bottom-container">
				<div class="left-icons-container icons-container">
					<div class="hamburger-icon" on:click={() => ($shouldVerticalNavbarAppear = true)}>
						<div class="bar"></div>
						<div class="bar"></div>
						<div class="bar"></div>
					</div>
					<img src={searchIcon} alt="search" />
				</div>
				<img src={logo} alt="logo" class="logo" />
				<div class="right-icons-container icons-container">
					<img src={loginIcon} alt="login" />
					<img src={cartIcon} alt="shopping-cart" />
				</div>
			</div>
		{:else}
			<img src={logo} alt="logo" class="logo" />
			<h1>Beaute & Elegance</h1>
			<div class="icons-container">
				<img src={loginIcon} alt="login" />
				<img src={searchIcon} alt="search" />
				<img src={cartIcon} alt="shopping-cart" />
			</div>
		{/if}
	</div>
</MediaQuery>

<style>
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-inline: 4rem;
		height: 10rem;
		background: #f0d9d9;
	}

	h1 {
		font-family: 'MoonTime';
		font-weight: lighter;
		font-size: 6.17rem;
	}

	.icons-container {
		display: flex;
		align-items: center;
		gap: 3rem;
	}

	img.logo {
		width: 7rem;
	}

	img:not(.logo) {
		width: 3.5rem;
		height: 3.5rem;
		cursor: pointer;
	}

	img[alt='shopping-cart'] {
		transform: rotateY(180deg);
		width: 4rem;
		height: 4rem;
	}

	@media screen and (max-width: 950px) {
		.container {
			height: 15rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 0;
			padding-bottom: 10rem;
			padding-top: 8rem;
		}

		.bottom-container {
			width: 100%;
			padding-inline: 1.5rem;
			display: flex;
			justify-content: space-between;
		}

		h1 {
			font-size: 5.5rem;
		}

		.hamburger-icon {
			display: flex;
			flex-direction: column;
			gap: 0.6rem;
			cursor: pointer;
		}
		.bar {
			width: 3rem;
			height: 0.4rem;
			border-radius: 2rem;
			background: #000;
		}

		.icons-container {
			gap: 1.2rem;
		}
	}
</style>
