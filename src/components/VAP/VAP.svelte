<script type="ts">
    import { onMount,afterUpdate } from 'svelte';
    import { derived } from 'svelte/store'
    import { max_volume,absortion_factor, max } from "../../store";
    import type IAgression from "../Agressions/IAgression"
    export let agressions : IAgression[] 
    let vap // section element

    $: buys =  agressions.filter(agression=> agression.type === 'buy')
    $: sells =  agressions.filter(agression=>  agression.type === 'sell')

    $: buySum = buys.map(b=>{ return b.lots}).reduce((agg,acc)=>{ return agg+acc},0)
    $: sellSum = sells.map(b=>{ return b.lots}).reduce((agg,acc)=>{ return agg+acc},0)

    //Bar size calcs
    $: maxSum = buySum > sellSum ? buySum : sellSum // max agression on this price
    $: buyPercent = ((buySum * 100) / $max_volume) || 1
    $: sellPercent =  ((sellSum * 100) / $max_volume) || 1

    /**
     Set te max agression volume of all prices
    **/
    function updateMaxVolume() {
        if(maxSum > $max_volume) {
            max_volume.set(maxSum)
        }
        return $max_volume
    }

    /*
     Define the classes of the bars
    */
    function setBarClasses (type) {
        let classes = `bar bar-${type}`
        if(type == 'buy' && buySum === 0)
            classes += ' hidden'
        if(type == 'sell' && sellSum === 0)
            classes += ' hidden'


        return classes
    }

    function isAbsortion(type,sellSum){

        if(type === 'buy' && maxSum === buySum)
            return (buySum / sellSum > absortion_factor) && (maxSum || 0 / $max_volume || 0) > 50
        if(type === 'sell' && maxSum === sellSum)
            return (sellSum / buySum > absortion_factor) && (maxSum || 0 / $max_volume || 0) > 50
    }

    afterUpdate(()=>{
        updateMaxVolume()
    })
</script>

<section bind:this={vap} >
    <div class={`${setBarClasses('buy')}`}  class:glow-sell={isAbsortion('buy',buySum)}  style={`height:${ buyPercent }px;`} >{buySum} </div>
    <div class={`${setBarClasses('sell')}`} class:glow-sell={isAbsortion('sell',sellSum)} style={`height:${ sellPercent }px`} >{sellSum}</div>
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