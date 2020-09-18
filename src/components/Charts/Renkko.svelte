<script>
  import { agressions } from "../../store";
  import { getFormatedTime } from "../../utils";
  const TIMES_TO_SHOW = 5;
  const PRICES_TO_SHOW = 50;
  $: times = $agressions.map((agression) => agression.time);

  function getPriceRange(){
    const min_price =  $agressions.map((agression) => agression.price).reduce((a,b)=> a<b ? a : b)
    const max_price =  $agressions.map((agression) => agression.price).reduce((a,b)=> a>b ? a : b)
    let range = []
    for (let index = max_price; index >= min_price; index-=0.5) {
      range.push(index)
    }
    console.log(range)
    return range
  }

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
    overflow-y: scroll;
  }
  .time-wrapper{
    grid-area: times;
    position: absolute;
    bottom: 10px;
    width: inherit;
  }
  .times {
    grid-area: times;
    height: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
  }


  .prices {
    grid-area: prices;
    display: flex;
    flex-direction: column;

    gap: 10px;
    align-items: center;
  }
  .candles {
    grid-area: candles;
    display: flex;
    gap:2px;
  }

  .candle {
    height: 10px;
    width: 5px;
    background: green;
  }
</style>

<div class="renkko">
    <div class="prices">
      {#each getPriceRange() as price, i}
        <span>{price.toFixed(1)}</span>
      {/each}
    </div>

  <div class="candles">
    {#each Array.from($agressions).reverse() as agression,i}
    <div class="candle" style={`background:${$agressions[i-1] && $agressions[i-1].price > agression.price ? 'red' : 'green' }`} />
    {/each}
  </div>
  <div class="time-wrapper">
    <div class="times">
      {#each times.splice(0, TIMES_TO_SHOW) as time}
        <span>{getFormatedTime(time)}</span>
      {/each}
      <span />
    </div>
  </div>

</div>
