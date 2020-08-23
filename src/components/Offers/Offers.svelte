<script type="ts">
    import Offer from './Offer.svelte'
    import type IOffer from "./IOffer"
    export let offers : IOffer[]
    
</script>
<style>
    .offers {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 200px;
        max-height: 200px;
        overflow: hidden;
    }
</style>
<div class="offers">
    {#if offers}
        {#each offers as offer}
            <Offer {offer} />
        {/each}
    {/if}

</div>
