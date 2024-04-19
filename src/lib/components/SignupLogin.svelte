<script lang="ts">
	let selectedTab: 'connexion' | 'inscription' = 'inscription';

	function goToConnexionForm() {
		selectedTab = 'connexion';
	}

	function goToInscriptionForm() {
		selectedTab = 'inscription';
	}
</script>

<div class="full-screen-container">
	<div class="signup-login-container">
		{#if selectedTab === 'connexion'}
			<h2>Connexion</h2>

			<div class="signup-login-pages-btns-container">
				<button class="login-page-btn selected-tab" on:click={goToConnexionForm}>connexion</button>
				<button class="signup-page-btn" on:click={goToInscriptionForm}>inscription</button>
			</div>

			<form>
				<label>
					<span>Adresse e-mail</span>
					<br />
					<input type="email" name="email" required />
				</label>

				<label>
					<span>Mot de passe</span>
					<br />
					<input type="password" name="password" required />
					<a href="/" class="forget-password-link">Mot de passe oublié?</a>
				</label>

				<div class="login-btn-and-signup-question-container">
					<button class="login-btn">Connexion</button>
					<p class="signup-question">
						Vous n'avez pas un compte?
						<a href="/">inscrivez-vous</a>
					</p>
				</div>
			</form>
		{:else}
			<h2>Inscription</h2>

			<div class="signup-login-pages-btns-container">
				<button class="login-page-btn" on:click={goToConnexionForm}>connexion</button>
				<button class="signup-page-btn selected-tab" on:click={goToInscriptionForm}
					>inscription</button
				>
			</div>

			<form>
				<label>
					<span>Nom d'utilisateur</span>
					<br />
					<input type="text" name="username" required />
				</label>

				<label>
					<span>Adresse e-mail</span>
					<br />
					<input type="email" name="email" required />
				</label>

				<label>
					<span>Mot de passe</span>
					<br />
					<input type="password" name="password" required />
				</label>

				<div class="signup-btn-and-signup-question-container">
					<button class="signup-btn">Inscription</button>
				</div>
			</form>
		{/if}
	</div>
</div>

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
	}
	.signup-login-container h2 {
		text-transform: capitalize;
	}

	.signup-login-pages-btns-container {
		display: flex;
		justify-content: center;
		margin-top: 2em;
		border-radius: 3rem;
	}
	.signup-login-pages-btns-container button,
	.login-btn,
	.signup-btn {
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

	form {
		margin-top: 6rem;
		text-wrap: nowrap;
		width: 80%;
	}
	form label {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
	}
	form label span {
		margin-bottom: -1em;
		margin-left: 0.2em;
	}
	form label:first-of-type {
		margin-bottom: 2em;
	}
	form label:not(:first-of-type, :last-of-type) {
		margin-bottom: 2em;
	}
	form label:last-of-type {
		margin-bottom: 0.2em;
	}
	form input {
		font-size: 1.5rem;
		padding: 0.3em 0.5em;
	}
	form .forget-password-link {
		font-size: 1.4rem;
		display: block;
		margin-bottom: 3em;
		margin-left: 0.2em;
		color: #8d5a5a;
		margin-top: 0.3em;
	}
	form .login-btn-and-signup-question-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
	form .login-btn,
	form .signup-btn {
		background: #f1dada;
		border: none;
		font-size: 1.9rem;
		padding-inline: 2em;
		text-transform: capitalize;
		cursor: pointer;
		outline: 0.1rem solid transparent;
		transition: 0.2s;
	}
	form .signup-btn {
		display: block;
		margin: auto;
		margin-top: 3em;
	}
	form .login-btn:hover,
	form .signup-btn:hover {
		background: #fff;
		color: #e6a3a3;
		outline-color: #e6a3a3;
	}
	form .signup-question {
		margin: auto;
		display: block;
		font-size: 1.4rem;
	}
	form .signup-question a {
		color: #923232;
	}
</style>
