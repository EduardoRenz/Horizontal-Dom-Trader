<script type="ts">
    import Agression from './Agression.svelte'
    import type IAgression from "./IAgression"
    export let price_agressions : IAgression[] 
    const MAX_AGRESSIONS_SHOW  = 15 // limit to slice in this price

    import { flip } from 'svelte/animate';
    import {send,receive} from '../../utils'

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
    {#if price_agressions}
        {#each price_agressions.slice(0,MAX_AGRESSIONS_SHOW) as agression(agression)}
            <div in:receive="{{key: agression}}" out:send="{{key: agression}}"animate:flip="{{duration: 100}}" >
                <Agression {agression} />
            </div>
        {/each}
    {/if}
</div>
