<script type="ts">
    import { afterUpdate } from 'svelte';
    import { max_volume,absortion_factor, max } from "../../store";
    import type IAgression from "../Agressions/IAgression"
    export let agressions : IAgression[] 
    let vap: any // section element

    $: buys =  agressions.filter(agression=> agression.type === 'buy')
    $: sells =  agressions.filter(agression=>  agression.type === 'sell')
    $: buySum = buys.map(b=>{ return b.lots}).reduce((agg,acc)=>{ return agg+acc},0)
    $: sellSum = sells.map(b=>{ return b.lots}).reduce((agg,acc)=>{ return agg+acc},0)
    //Bar size calcs
    $: maxSum = buySum > sellSum ? buySum : sellSum // max agression on this price
    $: buyPercent = ((buySum * 100) / $max_volume) || 1
    $: sellPercent =  ((sellSum * 100) / $max_volume) || 1

     /** Set te max agression volume (of all prices) */
    function updateMaxVolume() {
        if(maxSum > $max_volume) {
            max_volume.set(maxSum)
        }
        return $max_volume
    }

    /** Checks if the agressios are an absortion, normaly taking a inbalanced agression type (ex 10%) */
    function isAbsortion(type:string,sum:number){
        if(type === 'buy' && maxSum === sum)
            return (buySum / sellSum > absortion_factor) && (maxSum || 0 / $max_volume || 0) > 50
        if(type === 'sell' && maxSum === sum)
            return (sellSum / buySum > absortion_factor) && (maxSum || 0 / $max_volume || 0) > 50
    }

    afterUpdate(()=>{
        updateMaxVolume()
    })
</script>

<section bind:this={vap} >
    <div class="bar bar-buy"  class:hidden={buySum === 0} class:glow-buy={isAbsortion('buy',buySum)}  style={`height:${ buyPercent }px;`} >{buySum} </div>
    <div class="bar bar-sell" class:hidden={sellSum === 0} class:glow-sell={isAbsortion('sell',sellSum)} style={`height:${ sellPercent }px`} >{sellSum}</div>
</section>

<style>
    section {
        display: flex;
        align-items: flex-end;
        text-align: center;
        min-height: 100px;
        height: 100%;
        padding: 0 1px;
        font-size: 10px;
    }
    .bar {
        width: 113px;
      
        display: flex;
        align-items: center;
        justify-content: center;
        transition: height var(--transition-speed) ease-in;
    }
    .bar-buy {
        background-color: var(--buy);
    }
    .bar-sell {
        background-color: var(--sell);
    }
    .hidden {
        opacity: 0;
    }
</style>