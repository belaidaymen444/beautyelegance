<script lang="ts">
    
	

	
</script>


<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="initial-scale=1, width=device-width" />

  <link rel="stylesheet" href="./global.css" />
  <link rel="stylesheet" href="./index.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Open Sans:wght@400&display=swap"
  />
</head>
<body>
  <div class="desktop-1">
    <img
      class="desktop-1-child"
      loading="lazy"
      alt=""
      src="src/lib/assets/icons/vector-1.svg"
    />
    
    <form class="login-form">
      <div class="google-login">
        <div class="google-button">
          <div class="connexion">Connexion</div>
        </div>
        <button class="email-login">
          <div class="google-icon">
            <img
              class="devicongoogle"
              alt=""
              src="src/lib/assets/icons/devicongoogle.svg"
            />
          </div>
          <div class="continuer-avec-google">Continuer avec Google</div>
        </button>
        <div class="email-option">
          <div class="ou-bien-avec">Ou bien avec email</div>
        </div>
      </div>
      <div class="credentials">
        <div class="username-input">
          <div class="nom-dutilisateur-ou">Nom d'utilisateur ou email</div>
        </div>
        <input class="field" type="text" />

        <div class="password-input">
          <div class="password-label">
            <div class="mot-de-passe">Mot de passe</div>
          </div>
          <a class="oubler" href="">Mot de passe oublié?</a>
          
        </div>
        <input class="field1" type="text" />
      </div>
      <button class="login-button">
        <div class="conexion">Conexion</div>
      </button>
      <p class="signintxt">Vous n'avez pas un compte? <a href="">inscrivez-vous</a></p>
    </form>
    <div class="rectangle-parent">
      <img class="frame-child" alt="" src="src/lib/assets/Sample Imgs/Top Slider Imgs/rectangle-1@2x.png" />

      <img
        class="logo-1-icon"
        loading="lazy"
        alt=""
        src="src/lib/assets/logo-1@2x.png"
      />
    </div>
  </div>
</body>



<style>.desktop-1-child {
    position: absolute;
    top: 242.6px;
    left: 631.4px;
    width: 348.5px;
    
  }
  .connexion {
    position: relative;
    font-size: 27.2px;
    letter-spacing: 0.1em;
    line-height: 41px;
    font-family: var(--font-open-sans);
    color: var(--color-black);
    text-align: left;
    text-shadow: 0.8px 0 0#000, 0 0.8px 0#000, -0.8px 0 0#000, 0-0.8px 0#000;
  }
  .google-button {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0 var(--padding-xl) 0 23px;
  }
  .devicongoogle {
    width: 24.6px;
    height: 23.4px;
    position: relative;
    border-radius: 125.13px;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 1;
  }
  .google-icon {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0 0 8.3px;
  }
  .continuer-avec-google {
    height: 40px;
    flex: 1;
    position: relative;
    font-size: 15.1px;
    letter-spacing: 0.13em;
    line-height: 150%;
    font-family: var(--font-open-sans);
    color: var(--color-black);
    text-align: left;
    display: flex;
    align-items: center;
  }
  .email-login {
    cursor: pointer;
    border: 0.4px solid #c6c6c6;
    padding: 10px 40.7px 8px;
    background-color: var(--color-white);
    align-self: stretch;
    border-radius: 149.35px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 14.7px;
  }
  .ou-bien-avec {
    width: 137.3px;
    position: relative;
    font-size: 10.6px;
    letter-spacing: 0.13em;
    line-height: 16px;
    font-family: var(--font-open-sans);
    color: #a1a1a1;
    text-align: left;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    z-index: 1;
  }
  .email-option,
  .google-login {
    align-self: stretch;
    display: flex;
    align-items: flex-start;
  }
  .email-option {
    flex-direction: row;
    justify-content: center;
    padding: 0 var(--padding-xl) 0 39px;
    position: relative;
    top: 15px;
  }
  .google-login {
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 0 6.6px;
    gap: 16.1px;
  }
  .nom-dutilisateur-ou {
    flex: 1;
    position: relative;
    font-size: 17.3px;
    letter-spacing: -0.02em;
    line-height: 26px;
    font-family: var(--font-open-sans);
    color: var(--color-black);
    text-align: left;
  }
  .username-input {
    width: 227.8px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 var(--padding-7xs) 0 6.4px;
    box-sizing: border-box;
  }
  .field {
    border: 0.8px solid var(--color-gainsboro);
    outline: 0;
    background-color: var(--color-white);
    align-self: stretch;
    height: 46px;
    box-shadow: 0 0.8px 1.51px rgba(0, 0, 0, 0.05);
    border-radius: 1.51px;
    box-sizing: border-box;
    min-width: 201px;
  }
  .mot-de-passe {
    flex: 1;
    position: relative;
    top: 16px;
    font-size: var(--font-size-lg-1);
    line-height: 150%;
    font-family: var(--font-open-sans);
    color: var(--color-black);
    text-align: left;
  }
  .password-label {
    width: 306.9px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 var(--padding-7xs);
    box-sizing: border-box;
  }
  .field1 {
    align-self: stretch;
    height: 46px;
    box-shadow: 0 0.8px 1.51px rgba(0, 0, 0, 0.05);
    border-radius: 1.51px;
    background-color: var(--color-white);
    border: 0.8px solid var(--color-gainsboro);
    box-sizing: border-box;
    flex-shrink: 0;
  }
  .credentials,
  .password-input {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .password-input {
    height: 73.1px;
    padding: 0 0 46.1px;
    box-sizing: border-box;
    gap: 0.1px;
  }
  .field1 {
    border: 0.8px solid var(--color-gainsboro);
    outline: 0;
    background-color: var(--color-white);
    align-self: stretch;
    height: 46px;
    box-shadow: 0 0.8px 1.51px rgba(0, 0, 0, 0.05);
    border-radius: 1.51px;
    box-sizing: border-box;
    min-width: 201px;
    position: relative;
    top: -36px;
  }
  .credentials {
    gap: 7.8px;
  }
  .conexion {
    position: relative;
    font-size: var(--font-size-lg-1);
    letter-spacing: 0.13em;
    line-height: 150%;
    font-family: var(--font-open-sans);
    color: var(--color-black);
    text-align: left;
    display: inline-block;
    min-width: 99px;
  }
  .login-button,
  .login-form {
    display: flex;
    align-items: flex-start;
  }
  .login-button {
    cursor: pointer;
    border: 0;
    padding: 16.6px var(--padding-xl) 16.7px;
    background-color: #f1dada;
    align-self: stretch;
    border-radius: 149.35px;
    flex-direction: row;
    justify-content: center;
    position: relative;
    top:-25px;
  }
  .login-button:hover {
    background-color: #d9c2c2;
  }
  .login-form {
    margin: 0;
    position: absolute;
    top: 85px;
    left: 638.2px;
    width: 334.6px;
    flex-direction: column;
    justify-content: flex-start;
    gap: 31px;
  }
  .frame-child {
    height: 642px;
    width: 352px;
    position: absolute;
    margin: 0 !important;
    top: 0;
    left: 0;
    object-fit: cover;
    max-width: 100%;
    z-index: 0;
  }
  .logo-1-icon {
    height: 121px;
    width: 94.2px;
    position: relative;
    object-fit: contain;
    z-index: 1;
  }
  .rectangle-parent {
    position: absolute;
    top: 0;
    left: 0;
    width: 352px;
    height: 730px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 25px 11px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .desktop-1 {
    width: 100%;
    height: 641px;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    line-height: normal;
    letter-spacing: normal;
  }
  .signintxt{
    font-family: var(--font-open-sans); 
    position: relative;
    top: -55px;
    font-size: 14px;
    left: 25px;
  }
  .oubler{
    font-family: var(--font-open-sans); 
    position: relative;
    font-size: 14px;
    left: 195px;
    top: -2px;
  
  
  
  }
  @media screen and (max-width: 450px) {
    .connexion {
      font-size: 22px;
      line-height: 33px;
    }
  }

  body {
  margin: 0;
  line-height: normal;
}

:root {
  /* fonts */
  --font-open-sans: "Open Sans";

  /* font sizes */
  --font-size-lg-1: 18.1px;

  /* Colors */
  --color-white: #fff;
  --color-black: #000;
  --color-gainsboro: #e0e0e0;

  /* Paddings */
  --padding-xl: 20px;
  --padding-7xs: 6px;

  /* Border radiuses */
  --br-130xl-4: 149.4px;
  --br-11xs-5: 1.5px;
}
  </style>

