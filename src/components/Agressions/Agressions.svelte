<script type="ts">
    import Agression from './Agression.svelte'
    import type IAgression from "./IAgression"
    export let price_agressions : IAgression[] 
    const MAX_AGRESSIONS_SHOW  = 15 // limit to slice in this price
</script>
<style>
    .agressions {
        display: inline;
        flex-direction: column;
        justify-content: flex-start;
        min-height: 200px;
        max-height: 200px;
        position: relative;
    }

</style>
<div class="agressions">
    {#if price_agressions}
        {#each price_agressions.slice(0,MAX_AGRESSIONS_SHOW) as agression}
            <Agression {agression} />
        {/each}
    {/if}
</div>
