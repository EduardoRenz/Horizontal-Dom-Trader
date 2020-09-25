<script lang="ts">
  import { onMount } from "svelte";
  import {
    time_now,
    offers,
    last_price,
    follow_last_price,
  } from "./store";
  import { getPriceID } from "./utils";
  import Head from "./components/Head/Head.svelte";
  import Footer from "./components/Footer.svelte";
  import PriceArea from "./components/PriceArea/PriceArea.svelte";
  import { simulate } from "./services/simulation";
  import Popover from "./components/Tools/Popover";

  let main;
  const SCROLL_SENSIBILITY = 20;

  onMount(async () => {
    Popover();
    main.addEventListener("wheel", scrollHorizontal);
    setInterval(() => {
      time_now.set(new Date());
      //Simulations
      simulate($last_price, $offers);
    }, 1000);
  });

  $: $last_price, $follow_last_price && followPrice();

  //  afterUpdate(()=>{
  //    if($follow_last_price)
  //     followPrice()
  //  })

  function followPrice() {
    document.querySelector(`#${getPriceID($last_price)}`).scrollIntoView({
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
  <PriceArea price={5380.5} isLimit={true} />
  <PriceArea
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
  <PriceArea price={5389.0} isLimit={true} />
</main>
<Footer />
