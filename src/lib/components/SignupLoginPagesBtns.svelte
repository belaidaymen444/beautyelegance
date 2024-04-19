<script lang="ts">
	export let selectedTab: 'connexion' | 'inscription';
	export let onConnexionClick: () => void;
	export let onInscriptionClick: () => void;
</script>

<div class="signup-login-pages-btns-container">
	{#if selectedTab === 'connexion'}
		<button class="login-page-btn selected-tab" on:click={onConnexionClick}>connexion</button>
		<button class="signup-page-btn" on:click={onInscriptionClick}>inscription</button>
	{:else}
		<button class="login-page-btn" on:click={onConnexionClick}>connexion</button>
		<button class="signup-page-btn selected-tab" on:click={onInscriptionClick}>inscription</button>
	{/if}
</div>

<style>
	.signup-login-pages-btns-container {
		display: flex;
		justify-content: center;
		margin-top: 2em;
		border-radius: 3rem;
	}

	.signup-login-pages-btns-container button {
		border: none;
		font-size: 1.7rem;
		padding: 0.6em 2em;
		text-transform: capitalize;
		cursor: pointer;
	}

	.signup-login-pages-btns-container .login-page-btn {
		border-top-left-radius: 3rem;
		border-bottom-left-radius: 3rem;
	}

	.signup-login-pages-btns-container .signup-page-btn {
		border-top-right-radius: 3rem;
		border-bottom-right-radius: 3rem;
	}

	.signup-login-pages-btns-container .selected-tab {
		background: #f1dada;
	}
</style>
