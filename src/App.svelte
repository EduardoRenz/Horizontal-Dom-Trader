<script lang="ts">
  import { onMount } from "svelte";
  import { getPriceID,roundStep } from "./utils";
  const SCROLL_SENSIBILITY = 20;
  import {
    time_now,
    offers,
    last_price,
    follow_last_price,
    min,
    max,
    price_markers,
  } from "./store";
  import Head from "./components/Head/Head.svelte";
  import Footer from "./components/Footer.svelte";
  import PriceArea from "./components/PriceArea/PriceArea.svelte";
  import Popover from "./components/Tools/Popover";
  import { getMarketStream } from "./services/websocket";
  import { getMarketData } from "./services/marketDataRest";
  let main:HTMLElement;
  $: $last_price, $follow_last_price && followPrice();
  $: $min || $max, (price_range = generateMinMaxRange());
  let price_range: number[];

  async function getPriceMarkers() {
    const market_data = await getMarketData("dolv20");
    price_markers.set({
      [roundStep(market_data.adjustmentPreviousDay,0.5)]: { name: "Ajuste Anterior",color: 'rgba(50, 41, 179, 0.5)' },
      [roundStep(market_data.open,0.5)]: { name: "Abertura",color: '#b3b3b3'  },
      [roundStep(market_data.previous,0.5)]: { name: "Fechamento Ant.",color: '#b3b3b3'  },
    });
  }

  function getMarkers(price) {
    if ($price_markers[String(price)]) {
      return [$price_markers[String(price)]];
    }
  }

  function generateMinMaxRange() {
    let range = [];
    for (let index = $min; index < $max; index += 0.5) {
      range.push(index);
    }
    return range;
  }

  onMount(async () => {
    main.addEventListener("wheel", scrollHorizontal);
    Popover();
    getMarketStream("dolv20");
    await getPriceMarkers();

    setInterval(() => {
      time_now.set(new Date());
    }, 1000);
  });

  function followPrice() {
    let element = document.querySelector(`#${getPriceID($last_price)}`);
    if (!element) {
      return;
    }
    element.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center",
    });
  }

  /* Scroll the Main frame horizontaly */
  const scrollHorizontal = (e) => {
    e.preventDefault();
    main.scrollBy(e.deltaY * SCROLL_SENSIBILITY, 0);
  };
</script>

<style>
  main {
    overflow-x: scroll;
    overflow-y: hidden;
    display: grid;
    grid-template-areas:
      "header"
      "main"
      "footer";
    grid-template-rows: 53px 1fr 102px;
    grid-area: main;
    display: flex;
    max-height: calc(100%);
  }
</style>

<Head />
<main bind:this={main}>
  {#each price_range as price, i}
    <PriceArea
      {price}
      isLimit={i == 0 || i == price_range.length - 1}
      markers={getMarkers(price)} />
  {/each}
  <!-- <PriceArea
    price={5381.0}
    markers={[{ name: 'Ajuste Ant.', color: 'rgba(168, 168, 168, 0.5)' }, { name: 'VWAP', color: 'rgba(0, 209, 255, 0.5)' }]} />
  <PriceArea price={5381.5} />
  <PriceArea price={5382.0} />
  <PriceArea price={5382.5} />
  <PriceArea price={5383.0} />
  <PriceArea price={5383.5} />
  <PriceArea
    price={5384.0}
    markers={[{ name: 'Abertura', color: 'rgba(171, 200, 255, 0.5)' }]} />
  <PriceArea price={5384.5} />
  <PriceArea price={5385.0} />
  <PriceArea price={5385.5} />
  <PriceArea price={5386.0} />
  <PriceArea price={5386.5} />
  <PriceArea price={5387.0} />
  <PriceArea price={5387.5} />
  <PriceArea price={5388.0} />
  <PriceArea
    price={5388.5}
    markers={[{ name: 'Ajuste Ant.', color: 'rgba(50, 41, 179, 0.5)' }]} />
  <PriceArea price={5389.0} isLimit={true} /> -->
</main>
<Footer />
