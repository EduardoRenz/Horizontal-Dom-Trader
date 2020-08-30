<script type="ts">
    import Offer from './Offer.svelte'
    import type IOffer from "./IOffer"
    export let offers : IOffer[]
    const OFFERS_TO_SHOW = 10
    
</script>
<style>
    .offers {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 200px;

        min-height: 200px;
        overflow: hidden;
    }
    .triangle-up {
        width: 20px;
        height: 0px;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-bottom: 8px solid #555;
        margin: var(--margin ) auto;
        cursor: pointer;
    }
</style>
<div class="offers">
    <!-- <div class="triangle-up" style={`disply:${offers?.length > OFFERS_TO_SHOW ? 'block' : 'none'}`}></div> -->
    {#if offers}
        {#each offers as offer}
            <Offer {offer} />
        {/each}
    {/if}

</div>
