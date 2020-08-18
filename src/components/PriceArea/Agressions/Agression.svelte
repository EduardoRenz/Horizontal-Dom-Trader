<script type="ts">
    import type IAgression from "./IAgression";
    import { corretoras } from "../../../store";
    export let agression: IAgression;

  </script>
  
  <style>
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
      padding: var(--padding);
      border: 1px solid;
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
  

  </style>
  
  <div class={`player agression-${agression.type}`}>
    <span class="chip">{agression.lots}</span>
    <small>{corretoras[agression.agressor_id].name}</small>
    <span class={"player-color-circle " + corretoras[agression.agressor_id].group }></span>
  </div>
  