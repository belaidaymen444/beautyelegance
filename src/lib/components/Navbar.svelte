<script lang="ts">
	import MediaQuery from 'svelte-media-queries';
	import closeIcon from '$lib/assets/icons/close.png';

	const navLinksTexts = [
		'PROMOTION',
		'MAQUILLAGE',
		'CORPS & BAIN',
		'CHEVEUX',
		'PARFUMS',
		'SOINS',
		'DEO & STICK'
	];

	let navbar: HTMLElement;

	function hideNavbar(): void {
		navbar.style.transform = 'translateX(-100%)';
	}
</script>

<MediaQuery query="(max-width: 950px)" let:matches>
	<nav bind:this={navbar}>
		{#if matches}
			<button class="close-btn" on:click={hideNavbar}>
				<img src={closeIcon} alt="close" class="close-icon" />
			</button>
			<div class="seperator"></div>
		{/if}
		<ul>
			{#each navLinksTexts as linkText (linkText)}
				<li><a href="/">{linkText}</a></li>
			{/each}
		</ul>
	</nav>
</MediaQuery>

<style>
	nav ul {
		display: flex;
		justify-content: space-around;
		padding: 2rem;
		list-style-type: none;
	}

	li a {
		color: #000;
		text-decoration: none;
		font-size: 2rem;
		transition: 0.2s color;
	}

	li a:hover {
		color: #d1b2b2;
	}

	@media screen and (max-width: 950px) {
		nav {
			height: 100vh;
			width: 100%;
			position: fixed;
			top: 0;
			left: 0;
			background: #fff;
			z-index: 999;
			transform: translateX(-100%);
			transition: transform 0.3s;
		}

		.close-btn {
			position: absolute;
			top: 2rem;
			right: 2rem;
			background: none;
			border: none;
			cursor: pointer;
		}

		.close-icon {
			width: 3rem;
		}

		.seperator {
			width: 100%;
			height: 0.3rem;
			position: absolute;
			top: 6rem;
			left: 0;
			background: #000;
		}

		nav ul {
			flex-direction: column;
			justify-content: center;
			gap: 5rem;
			min-height: 100%;
			padding: 0;
			padding-left: 2rem;
		}

		li a {
			font-size: 2.5rem;
		}

		ul li {
			padding: 1rem;
			position: relative;
		}

		ul li::before {
			content: '';
			position: absolute;
			width: 1%;
			height: 80%;
			top: 50%;
			transform: translateY(-50%);
			left: -1rem;
			background: #fa9;
		}
	}
</style>
