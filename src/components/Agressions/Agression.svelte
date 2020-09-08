<script type="ts">
    import type IAgression from "./IAgression";
    import { corretoras,color_config } from "../../store";
    import { getQuantityColor } from "../../utils"
    export let agression: IAgression;

    $: colors = ()=> getQuantityColor(agression?.lots,$color_config?.ranges) 
  </script>
  <style>
    small {
      color:var(--light-text);
    }
    .player {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 10px;
      height: 16px;
      border-radius: 2px;
      margin-bottom: var(--margin);
      margin-right: 1px;
      margin-left: 1px;
      background: var(--background);
      padding: var(--padding) 1px;
      border: 1px solid;
      z-index: 1;
    }
  
    .player small {
      font-size: 10px;
    }
    .player-color-circle {
        width: 11px;
        height: 11px;
        border-radius: 50%;
    }

    .agression-sell {
      border-color: var(--sell);
      border-radius:2px;
    }
    .agression-buy {
      border-color: var(--buy);
      border-radius:2px;
    }
    .hidden{
      opacity: 0;
    }

  </style>
  
  <div 
  class="player"
  class:agression-buy={agression.type=='buy'}
  class:agression-sell={agression.type=='sell'}
  class:hidden={agression.ticks_consumed ==0}
  class:glow-buy={agression.ticks_consumed > 1 && agression.type === 'buy'}
  class:glow-sell={agression.ticks_consumed > 1 && agression.type === 'sell'}
  style={`width:calc(var(--player-size) * ${agression.ticks_consumed} )`}
  >
    <span class="chip" style="background:{$color_config.agressions ? colors() && colors().color : ''}">{agression.lots}</span>
    <small>{corretoras[agression.agressor_id].name}</small>
    <span class={"player-color-circle " + corretoras[agression.agressor_id].group }></span>
  </div>



  