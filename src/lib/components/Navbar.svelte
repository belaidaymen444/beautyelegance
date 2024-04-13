<script lang="ts">
	const navLinksTexts = [
		'PROMOTION',
		'MAQUILLAGE',
		'CORPS & BAIN',
		'CHEVEUX',
		'PARFUMS',
		'SOINS',
		'DEO & STICK'
	];
</script>

<nav>
	<ul>
		{#each navLinksTexts as linkText (linkText)}
			<li><a href="/">{linkText}</a></li>
		{/each}
	</ul>
</nav>

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
</style>
