<script type="ts">
    import Icon from '@iconify/svelte';
    import icebergIcon from '@iconify/icons-openmoji/iceberg';
    import type IOffer from "./IOffer"
    export let offer

</script>
<style>
    .player {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 10px;
        height: 16px;
        border-radius: 2px;
        background: var(--player-institucional-br);
        margin-bottom: var(--margin);
        margin-right: 1px;
        margin-left: 1px;
    }
    .chip {
        margin-left: var(--margin);
    }
    .player small {
        font-size: 10px;
    }

</style>

<div class="player"> 
    <span class="chip">4</span>
    <small>
        {offer.player_id}
        Bradesco
    </small>
    <Icon icon={icebergIcon} height="18px" style="margin-top:-3px" />
</div>

