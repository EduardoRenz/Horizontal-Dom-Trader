<script>
    import { agressions, corretoras } from '../../store'
    import { groupBy } from "../../utils"
    export let selected = "c_5"

    let options = {
        "c_5": { description:"Comprador - 5 Min", class:"buy"},
        "c_10":{ description:"Comprador - 10 Min", class:"buy"},
        "c_30":{ description:"Comprador - 30 Min", class:"buy"},
        "v_5": { description:"Vendedor - 5 Min", class:"sell"},
        "v_10":{ description:"Vendedor - 10 Min", class:"sell"},
        "v_30":{ description:"Vendedor - 30 Min", class:"sell"},
    }


    $: buys = $agressions.filter(a=>a.type=='buy')
    $: sells = $agressions.filter(a=>a.type=='sell')
    $: grouped_buys = groupBy(buys,'agressor_id')
    $: grouped_sells = groupBy(sells,'agressor_id')
    $:buys_rank_data = sumLots(grouped_buys)

    function sumLots(grouped){
        let players = Object.keys(grouped)
        let summed = []
        for (const player of players) {
            let sum = grouped[player].map(p=>p.lots).reduce((acc,agg)=>acc+agg,0)
            let mean = grouped[player].map(p=>p.price).reduce((acc,agg)=>acc+agg,0) / grouped[player].length
            summed.push({player_id:player,sum,mean})
        }
        return summed.sort((a,b)=>b.sum-a.sum)
    }

    function filteredByTime(option){
        
    }


</script>
<div class="ranking">
    <header>
        <select bind:value={selected}>
            {#each Object.keys(options) as option}
                <option value={option} class={options[option].class} >{options[option].description}</option>
            {/each}
        </select>
        <hr>
    </header>
    <table>
        <thead>
            <tr>
                <th>Pos.</th>
                <th>Corretora</th>
                <th>Prc médio</th>
                <th>Lotes</th>
            </tr>
        </thead>
        <tbody>
            {#each buys_rank_data as rank,i}
                <tr>
                    <td>{i+1}</td>
                    <td>{corretoras[rank.player_id].name}</td>
                    <td>{rank.mean.toFixed(2)}</td>
                    <td>{rank.sum}</td>
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
