<script type="ts">
    import Agression from './Agression.svelte'
    import type IAgression from "./IAgression"
    export let agressions : IAgression[] 
    const MAX_AGRESSIONS_SHOW  = 10
</script>
<style>
    .agressions {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        min-height: 200px;
        max-height: 200px;
    }
    
</style>
<div class="agressions">
    {#if agressions}
        {#each agressions.slice(0,MAX_AGRESSIONS_SHOW) as agression}
            <Agression {agression} />
        {/each}
    {/if}
</div>
