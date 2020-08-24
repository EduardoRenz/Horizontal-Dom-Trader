<script lang="ts">
  import { onMount } from 'svelte';
  import Head from "./components/Head.svelte";
  import Footer from "./components/Footer.svelte";
  import PriceArea from "./components/PriceArea/PriceArea.svelte";
  let main

  onMount(async () => {
    main = document.querySelector('#main')
    main.addEventListener('wheel',scrollHorizontal)
  });
  
  /*
    Scroll the Main frame horizontaly
  */
  const scrollHorizontal = (e) =>{
    e.preventDefault()
    main.scrollBy(e.deltaY*20,0);
  }

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
    max-height: calc(100% - 8px);


    /*
      Grid on background
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 2px);
    background-attachment: local;
    background-size:var(--column-size) ; */
  }
</style>

<Head />
<main id="main">
  <PriceArea price={5380.5} isLimit={true} />
  <PriceArea price={5381.0} markers={[{name:'Ajuste Ant.', color:'rgba(168, 168, 168, 0.5)'},{name:'VWAP', color:'rgba(0, 209, 255, 0.5)'}]} />
  <PriceArea price={5381.5} />
  <PriceArea price={5382.0} />
  <PriceArea price={5382.5} />
  <PriceArea price={5383.0} />
  <PriceArea price={5383.5} />
  <PriceArea price={5384.0} markers={[{name:'Abertura', color:'rgba(171, 200, 255, 0.5)'}]} />
  <PriceArea price={5384.5} />
  <PriceArea price={5385.0} />
  <PriceArea price={5385.5} />
  <PriceArea price={5386.0} />
  <PriceArea price={5386.5} />
  <PriceArea price={5387.0} />
  <PriceArea price={5387.5} />
  <PriceArea price={5388.0} />
  <PriceArea price={5388.5} markers={[{name:'Ajuste Ant.', color:'rgba(50, 41, 179, 0.5)'}]} />
  <PriceArea price={5389.0} isLimit={true} />
</main>
<Footer />
