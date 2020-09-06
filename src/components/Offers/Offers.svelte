<script type="ts">
    import Offer from './Offer.svelte'
    import type IOffer from "./IOffer"
    export let offers : IOffer[]
    const OFFERS_TO_SHOW = 10
    
    import { flip } from 'svelte/animate';
    import {send,receive} from '../../utils'

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
    <div class="triangle-up" style={`display:${offers?.length > 0 && offers?.length > OFFERS_TO_SHOW ? 'block' : 'none'}`}></div>
    {#if offers}
        {#each offers.slice(0,OFFERS_TO_SHOW).reverse() as offer(offer)}
            <div in:receive="{{key: offer}}" out:send="{{key: offer}}" animate:flip="{{duration: 200}}">
                <Offer {offer} />
            </div>
            
        {/each}
    {/if}

</div>
