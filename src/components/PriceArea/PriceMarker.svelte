<!-- Represents a meaning or information on this price (eg Open, Close, VWAP etc )  -->
<script type="ts" >
    import type  { Marker } from './IMarker'
    export let markers  : Marker[]
</script>
{#if markers}
    {#each markers as marker}
        <span class="price-marker" style="background:{marker.color}" >
            {marker.name || ''}
        </span>
    {/each}
{/if}

<style>
    .price-marker {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        color: white;
        border-radius: 3px;
        width: 100%;
        height: 21px;
        padding: 5px;
        margin-bottom: 2px;
    }
</style>