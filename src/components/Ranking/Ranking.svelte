<script lang="ts">
    import { afterUpdate } from 'svelte'
    import { agressions, corretoras, time_now, last_price } from '../../store'
    import { groupBy,dateIsLowerThan } from "../../utils"
    const MAX_PLAYERS_RANK = 3
    export let selected = "c_5"
    let options = {
        "c_1": { description:"Comprador - 1 Min", class:"buy", time:1},
        "c_5": { description:"Comprador - 5 Min", class:"buy", time:5},
        "c_10":{ description:"Comprador - 10 Min", class:"buy", time:10},
        "c_30":{ description:"Comprador - 30 Min", class:"buy", time:30},
        "v_1": { description:"Vendedor - 1 Min", class:"sell", time:1},
        "v_5": { description:"Vendedor - 5 Min", class:"sell", time:5},
        "v_10":{ description:"Vendedor - 10 Min", class:"sell", time:10},
        "v_30":{ description:"Vendedor - 30 Min", class:"sell", time:30},
    }
    $: filtered_by_time = filteredByTime($agressions)(options[selected].time)
    $: filtered_by_type = filter(filtered_by_time)(options[selected].class)
    $: grouped = groupBy(filtered_by_type,'agressor_id')
    $: rank_data = sumLots(grouped)


    const filteredByTime = (list) => (minutes) =>{
        let time = new Date( new Date().setMinutes( new Date().getMinutes() - minutes ))
        return list.filter(item=>item.time > time)
    }
    const filter = (list) => (type) =>  list.filter(a=>a.type==type)

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
</script>
<div class="ranking">
    <header>
        <select bind:value={selected} class={options[selected].class}>
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
            {#each rank_data.slice(0,MAX_PLAYERS_RANK) as rank,i}
                <tr style={`background:var(--${corretoras[rank.player_id].group})`}>
                    <td>{i+1} </td>
                    <td>{corretoras[rank.player_id].name}</td>
                    <td 
                        class:bg-sell={(options[selected].class === 'buy' && rank.mean > $last_price) || (options[selected].class === 'sell' && rank.mean < $last_price) }
                        class:bg-buy={(options[selected].class === 'sell' && rank.mean > $last_price) || (options[selected].class === 'buy' && rank.mean < $last_price) }
                         >{rank.mean.toFixed(2)}</td>
                    <td>{rank.sum}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
<style>
    select {
        width: 100%;
        height: 20px;
        margin: var(--margin);
    }
    td{
        font-size: 11px;   
    }
    option{
        background: var(--background);
    }
    hr {
        margin: 2px;
    }
    
    .ranking {
        height: 100%;
        border: 1px solid var(--border);
        padding: var(--padding);
        gap:var(--margin);
        min-width: 240px;
        min-width: 20%;
    }
    .buy {
        color: var(--buy);
    }
    .sell {
        color: var(--sell);
    }
    .bg-buy {
        background: var(--buy);
    }
    .bg-sell {
        background: var(--sell);
    }

</style>
