<script type="ts">
  import Icon from "@iconify/svelte";
  import icebergIcon from "@iconify/icons-openmoji/iceberg";
  import type IOffer from "./IOffer";
  import { corretoras,color_config } from "../../store";
  import { getQuantityColor } from "../../utils"
  export let offer: IOffer;
</script>

<style>
  .player {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 10px;
    height: 16px;
    min-height: 16px;
    border-radius: 2px;
    margin-bottom: var(--margin);
    margin-right: 1px;
    margin-left: 1px;
  }
  .chip {
    margin-left: var(--margin);
  }
  .player small {
    color:white;
    font-size: 10px;
  }

</style>

<div class={'player ' + corretoras[offer.player_id].group}>
  <span class="chip" style="background:{getQuantityColor(offer.lots,$color_config.ranges)}">{offer.lots}</span>
  <small>{corretoras[offer.player_id].name}</small>
  <small>
    {#if offer.iceberg}
      <Icon icon={icebergIcon} height="18px" style="margin-top:-1px" />
    {/if}
  </small>

</div>
