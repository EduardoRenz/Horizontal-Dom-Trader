<script>
  import { onMount,afterUpdate } from "svelte";
  import { Renkko } from "./Renkko.ts";
  import { agressions,last_price } from "../../store";
  const TIMES_TO_SHOW = 5;
  const PRICES_TO_SHOW = 4;
  let canvas, ctx;
  let renkko
  onMount(() => {
    canvas = document.querySelector('#renkko')
    renkko = new Renkko(canvas)
  });

  afterUpdate(()=>{
    renkko.update($agressions.sort((a,b)=>b.time-a.time))
  })
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
</style>
<canvas class="renkko" id="renkko" height="700px" />

