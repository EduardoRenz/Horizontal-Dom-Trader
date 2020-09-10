<script>
    import { agressions, corretoras } from '../../store'
    import { groupBy } from "../../utils"

    $: buys = $agressions.filter(a=>a.type=='buy')
    $: sells = $agressions.filter(a=>a.type=='sell')
    $: grouped_buys = groupBy(buys,'agressor_id')
    $: grouped_sells = groupBy(sells,'agressor_id')

</script>
<div class="ranking">
    <header>
        <select >
            <option value="c_5" class="buy" style="color:var(--buy)">Comprador - 5 Min</option>
            <option value="c_10" class="buy" style="color:var(--buy)">Comprador - 10 Min</option>
            <option value="c_30" class="buy" style="color:var(--buy)">Comprador - 30 Min</option>
            <option value="v_5" class="sell" style="color:var(--sell)">Vendedor - 5 Min</option>
            <option value="v_10" class="sell" style="color:var(--sell)">Vendedor - 10 Min</option>
            <option value="v_30" class="sell" style="color:var(--sell)">Vendedor - 30 Min</option>
        </select>
        <hr>
    </header>
    <table>
        <thead>
            <tr>
                <th>Pos.</th>
                <th>Corretora</th>
                <th>Prc médio</th>
                <th>Agressões</th>
            </tr>
        </thead>
        <tbody>
            {#each buys as player,i}
                <tr>
                    <td>{i+1}</td>
                    <td>{player.lots}</td>
                    <td></td>
                    <td></td>

                </tr>
            {/each}

        </tbody>
    </table>
</div>
<style>
    select {
        width: 100%;
        height: 26px;
        margin: var(--margin);
    }


    option{
        background: var(--background);
    }
    hr {
        margin: 2px;
    }
    .ranking {
    
 
        border: 1px solid var(--border);
        padding: var(--padding);
        gap:var(--margin);
    }
    .buy {
        color: var(--buy);
    }
    .sell {
        color: var(--sell);
    }


</style>
