<script lang="ts">
	import HeaderTopContainer from '$lib/components/HeaderTopContainer.svelte';
	import imgUrl from '$lib/assets/Sample Imgs/Products Imgs/photo_19.jpg';
	import { cart } from '$lib/stores/cart_store';
</script>

<HeaderTopContainer />

<main>
	<div class="container">
		<img class="product-img" width="400" src={imgUrl} alt="" />

		<div class="right-elements">
			<div class="text-container"></div>
			<div class="title-continer">
				<h1>GRACIAS Shampoing sans Sulfate à l’huile de figue de Barbarie230ML</h1>
				<p class="small-detail">shampoing sans sulfate 250ml</p>
			</div>
            <div class="price-container">
                <hr />
                <p class="price">550.00 DZD</p>
                <hr />

            </div>
			<div class="Qte">
				<p>Quantité :</p>
			</div>
			<button class="ajoute-panier">Ajouter au panier</button>
		</div>
	</div>
</main>

<style>

    main{
        display: flex;
        
        
      
    }

	.container {
		display: flex;
		
		align-items: center;
		width: 100%;
		gap: 5rem;
		padding: 2rem;
       
	}
	.product-img {
		border: 5px solid rgba(107, 107, 107, 0.164);
		border-radius: 50px;
		width: 70vh;
        
	}
	.container .right-elements {
		display: flex;
		flex-direction: column;
		align-items: center;
        justify-content: space-between;
		height: 100%;
		width: 100%;
       
	}
	.text-container {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: center;
		width: 100%;
        

	}
    .price-container{
        display: flex; 
        flex-direction: column;
        width: 100%;

    }
	.right-elements p, .right-elements h1 {
		display: flex;

		font-weight: 600;
		width: 100%;
		font-family: open, sans-serif;
	}
	.title-continer {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.small-detail {
		color: gray;
	}
	.Qte {
		width: 100%;
	}
	.price {
		font-size: 3rem;
		color: hsla(0, 41%, 54%, 0.452);
        margin-block: 2rem;
	}
	.ajoute-panier {
		border: none;
		background-color: hsla(0, 41%, 54%, 0.452);
		width: 80%;
		height: 8vh;
		border-radius: 50px;
		color: white;
		font-size: 1.8rem;
		font-weight: 800;
		transition: 0.5s;
	}
</style>
