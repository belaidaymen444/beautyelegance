<script lang="ts">
	import photo1 from '$lib/assets/Sample Imgs/Top Slider Imgs/photo_1.png';
	import photo2 from '$lib/assets/Sample Imgs/Top Slider Imgs/photo_2.jpg';
	import photo4 from '$lib/assets/Sample Imgs/Top Slider Imgs/photo_4.jpg';

	const photos = [photo1, photo2, photo4];
	let i = 0;

	function moveToLeft() {
		if (-i !== photos.length - 1) {
			i--;

			return;
		}

		i = 0;
	}

	function moveToRight() {
		if (i !== 0) {
			i++;

			return;
		}

		i = -(photos.length - 1);
	}
</script>

<div class="container">
	<div class="imgs-container">
		{#each photos as photo (photo)}
			<img src={photo} style="transform: translateX({i * 100}%);" alt="img" />
		{/each}
	</div>

	<div class="arrows-container">
		<button on:click={moveToLeft} class="arrow left-arrow">&lt;</button>
		<button on:click={moveToRight} class="arrow right-arrow">&gt;</button>
	</div>
</div>

<style>
	.container {
		height: 65rem;
	}

	.imgs-container {
		height: 100%;
		display: flex;
		overflow: hidden;
	}
	img {
		min-width: 100%;
		transition: transform 0.7s;
	}

	.arrow {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: #fa9;
		display: grid;
		place-content: center;
		width: 7rem;
		height: 7rem;
		border-radius: 50%;
		font-size: 4rem;
		cursor: pointer;
		border: none;
	}
	.arrow:hover {
		background: #fff;
		border: 0.2rem solid #fa9;
	}
	.left-arrow {
		left: 2rem;
	}
	.right-arrow {
		right: 2rem;
	}
</style>
