<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import loginIcon from '$lib/assets/icons/add-user.png';
	import searchIcon from '$lib/assets/icons/search.png';
	import cartIcon from '$lib/assets/icons/shopping-cart.png';
</script>

<div class="container">
	<img src={logo} alt="logo" class="logo" />
	<h1>Beaute & Elegance</h1>
	<div class="icons-container">
		<img src={loginIcon} alt="login" />
		<img src={searchIcon} alt="search" />
		<img src={cartIcon} alt="shopping-cart" />
	</div>
</div>

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
		font-style: italic;
	}

	.icons-container {
		display: flex;
		align-items: center;
		gap: 3rem;
	}

	img.logo {
		width: 9rem;
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
</style>
