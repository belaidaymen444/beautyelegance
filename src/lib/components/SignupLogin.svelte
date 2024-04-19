<script lang="ts">
	import { shouldSignupLoginAppear } from '$lib/stores/signup_login_visibility_store';
	import closeIcon from '$lib/assets/icons/close.png';
	import ConnexionForm from './ConnexionForm.svelte';
	import InscriptionForm from './InscriptionForm.svelte';
	import SignupLoginPagesBtns from './SignupLoginPagesBtns.svelte';
	import { fade } from 'svelte/transition';

	let selectedTab: 'connexion' | 'inscription' = 'inscription';

	function goToConnexionForm() {
		selectedTab = 'connexion';
	}

	function goToInscriptionForm() {
		selectedTab = 'inscription';
	}
</script>

{#if $shouldSignupLoginAppear}
	<div transition:fade={{ duration: 200 }} class="full-screen-container">
		<div class="signup-login-container">
			<button on:click={() => ($shouldSignupLoginAppear = false)} class="close-btn">
				<img src={closeIcon} alt="close" />
			</button>
			{#if selectedTab === 'connexion'}
				<h2>Connexion</h2>
				<SignupLoginPagesBtns
					selectedTab="connexion"
					onConnexionClick={goToConnexionForm}
					onInscriptionClick={goToInscriptionForm}
				/>
				<ConnexionForm />
			{:else}
				<h2>Inscription</h2>
				<SignupLoginPagesBtns
					selectedTab="inscription"
					onConnexionClick={goToConnexionForm}
					onInscriptionClick={goToInscriptionForm}
				/>
				<InscriptionForm />
			{/if}
		</div>
	</div>
{/if}

<style>
	.full-screen-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		min-height: 100svh;
		background: #000c;
		z-index: 9999;
		display: grid;
		place-content: center;
	}

	.signup-login-container {
		padding: 2em 0;
		background: #fff;
		width: 40rem;
		min-height: 50rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 1rem;
		position: relative;
	}

	.close-btn {
		position: absolute;
		right: 3rem;
		top: 2rem;
		background: none;
		border: none;
		cursor: pointer;
		z-index: 9;
	}
	.close-btn img {
		width: 2.6rem;
	}

	.signup-login-container h2 {
		text-transform: capitalize;
	}
</style>
