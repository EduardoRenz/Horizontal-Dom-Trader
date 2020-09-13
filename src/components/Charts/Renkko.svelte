<script>
  import { agressions } from "../../store";
  import { getFormatedTime } from "../../utils";
  const TIMES_TO_SHOW = 5;
  const PRICES_TO_SHOW = 4;
  $: times = $agressions.map((agression) => agression.time);
  $: prices = $agressions.map((agression) => agression.price);
</script>

<style>
  .renkko {
    color: white;
    font-size: 10px;
    height: 100%;
    border: 1px solid var(--border);
    padding: var(--padding);
    gap: var(--margin);
    width: 400px;
    min-width: 20%;
    display: grid;
    grid-template-areas:
      "candles prices"
      "times times";
    grid-template-rows: 1fr 15px;
    grid-template-columns: 1fr 40px;
  }
  .times {
    grid-area: times;
    height: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .prices {
    grid-area: prices;
    display: flex;
    flex-direction: column;
    width: auto;
    align-items: flex-end;
    justify-content: space-around;
  }
  .candles {
    grid-area: candles;
  }
</style>

<div class="renkko">
  <div class="prices">
    {#each prices.splice(0, PRICES_TO_SHOW).sort((a, b) => b - a) as price,i}
      <span>{price.toFixed(1)}</span>
    {/each}
  </div>
  <div class="candles">ca</div>

  <div class="times">
    {#each times.splice(0, TIMES_TO_SHOW) as time}
      <span>{getFormatedTime(time)}</span>
    {/each}
    <span></span>
  </div>
</div>
