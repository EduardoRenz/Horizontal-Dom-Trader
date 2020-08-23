<script type="ts">
    import { onMount } from 'svelte';

    import type IAgression from "../Agressions/IAgression"
    export let agressions : IAgression[] 

    let buys =  agressions.filter(agression=> agression.type === 'buy')
    let sells =  agressions.filter(agression=>  agression.type === 'sell')

    let buysSum = buys.map(b=>{ return b.lots}).reduce((agg,acc)=>{ return agg+acc},0)
    let sellSum = sells.map(b=>{ return b.lots}).reduce((agg,acc)=>{ return agg+acc},0)

    //Bar size calcs
    let maxSum = buysSum > sellSum ? buysSum : sellSum
    let buyPercent = ((buysSum * 100) / maxSum) || 1
    let sellPercent = ((sellSum * 100) / maxSum) || 1

    let vap // section element
    onMount(()=>{
        console.log(vap.offsetHeight)
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