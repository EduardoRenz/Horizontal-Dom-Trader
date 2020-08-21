<script type="ts">
    import Agression from './Agression.svelte'
    import type IAgression from "./IAgression"
    export let agressions : IAgression[] 
</script>
<style>
    .agressions {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 233px;
    }
</style>
<div class="agressions">
    {#if agressions}
        {#each agressions as agression}
            <Agression {agression} />
        {/each}
    {/if}

</div>
