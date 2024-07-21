<script lang="ts">
    import { cart } from "$lib/stores/cart_store";
    import deletIcon from '$lib/assets/icons/deletcartproduct.svg';


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
   

<div class="resposive-side">
    <table class="table-phone">
        <tr class="top-part">
            <td>
                <div>
                    <button class="delet-Button"
                        ><img src={deletIcon} width="13" alt="deletIcon" /></button
                    >
                    <h1>GRACIAS Shampoing</h1>
                </div>
            </td>
            <td> <img src="" alt="" width="300" /> </td>
        </tr>
        <tr class="for-descraption">
            <td id="descraption" class="descraption">
                GRACIAS Shampoing sans Sulfate à l’huile de figue de Barbarie230ML</td
            >
        </tr>
        <tr class="detail-in-phone">
            <td>PRIX : <span class="Prix">450.00DZD</span></td>
            <td
                >QUANTITE : <div class="Qte-general-input">
                    <input class="leftbt" type="button" value="+" />
                    <input class="QTE" type="number" value="1" />
                    <input class="rightbt" type="button" value="-" />
                </div></td
            >
            <td>sous-TOTAL : <span class="total-Price-X-QTE">900.00 DZD</span></td>
        </tr>
    </table>
</div>



<style>


</style>