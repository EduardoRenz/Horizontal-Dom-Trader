<script type="ts">
    import { onMount,afterUpdate } from 'svelte';
    import { maxVolume } from "../../store";
    import type IAgression from "../Agressions/IAgression"
    export let agressions : IAgression[] 
    let vap // section element

    let buys =  agressions.filter(agression=> agression.type === 'buy')
    let sells =  agressions.filter(agression=>  agression.type === 'sell')

    let buysSum = buys.map(b=>{ return b.lots}).reduce((agg,acc)=>{ return agg+acc},0)
    let sellSum = sells.map(b=>{ return b.lots}).reduce((agg,acc)=>{ return agg+acc},0)

    //Bar size calcs
    let maxSum 
    let buyPercent
    let sellPercent 

    /**
     Update bar height's
     **/
    function updateBars() {
        //Bar size calcs
        maxSum = buysSum > sellSum ? buysSum : sellSum // max agression on this price
        buyPercent = ((buysSum * 100) / $maxVolume) || 1
        sellPercent = ((sellSum * 100) / $maxVolume) || 1
    }
    /**
     Set te max agression volume of all prices
     **/
    function updateMaxVolume() {
        if(maxSum > $maxVolume) {
            maxVolume.set(maxSum)
        }
    }

    onMount(()=>{
        updateBars()
    })
    afterUpdate(()=>{
        updateMaxVolume()
        updateBars()
    })


</script>

<section bind:this={vap} >
    <div class="bar bar-buy" style={`height:${ buyPercent }px;`} >{buysSum}</div>
    <div class="bar bar-sell" style={`height:${ sellPercent }px`} >{sellSum}</div>
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
        overflow: hidden;
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
</style>