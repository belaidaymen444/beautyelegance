<script lang="ts">
    import { cart } from "$lib/stores/cart_store";
    import deletIcon from '$lib/assets/icons/deletcartproduct.svg';
    import MediaQuery from 'svelte-media-queries';


</script>




    
        <tr class="details">
            <td
                ><button class="delet-Button"
                    ><img src={deletIcon} width="13" alt="deletIcon" /></button
                ></td
            >
            <td><img src="" alt="" width="100" /></td>
            <td class="descraption">
                GRACIAS Shampoing sans Sulfate à l’huile de figue de Barbarie230ML
            </td>
            <td class="Prix">450.00DZD</td>
            <td>
                <div class="Qte-general-input">
                    <input class="leftbt" type="button" value="+" />
                    <input class="QTE" type="number" value="1" />
                    <input class="rightbt" type="button" value="-" />
                </div>
            </td>
            <td class="total-Price-X-QTE">900.00 DZD</td>
        </tr>
        <tr class="details">
            <td
                ><button class="delet-Button"
                    ><img src={deletIcon} width="13" alt="deletIcon" /></button
                ></td
            >
            <td><img src="" alt="" width="100" /></td>
            <td class="descraption">
                GRACIAS Shampoing sans Sulfate à l’huile de figue de Barbarie230ML
            </td>
            <td class="Prix">450.00DZD</td>
            <td>
                <div class="Qte-general-input">
                    <input class="leftbt" type="button" value="+" />
                    <input class="QTE" type="number" value="1" />
                    <input class="rightbt" type="button" value="-" />
                </div>
            </td>
            <td class="total-Price-X-QTE">900.00 DZD</td>
        </tr>
   




<style>
.details input[type='number']::-webkit-inner-spin-button,
	.details input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
	}
    .details {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		border-bottom: 2px solid rgba(128, 128, 128, 0.185);
	}
    .details td {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-right: 2rem;
	}
    .delet-Button {
		display: flex;
		justify-content: center;
		background: none;
		border: none;
		outline: none;
		cursor: pointer;
	}
    .descraption {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		color: #333333;
		font-weight: 600;
		width: 35%;
	}

</style>