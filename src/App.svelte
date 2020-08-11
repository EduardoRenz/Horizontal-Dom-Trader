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
    main.scrollBy(e.deltaY*20,e.deltaY*20);
  }

</script>

<style>
  main {
	overflow-x: scroll;
    display: grid;
    grid-template-areas:
      "header"
      "main"
      "footer";
    grid-template-rows: 53px 1fr 102px;
    grid-area: main;
    display: flex;
  }
</style>

<Head />
<main id="main">
  <PriceArea />
  <PriceArea markers={[{name:'Ajuste Ant.', color:'rgba(168, 168, 168, 0.5)'},{name:'VWAP', color:'rgba(0, 209, 255, 0.5)'}]} />
  <PriceArea />
  <PriceArea />
  <PriceArea />
  <PriceArea />
  <PriceArea />
  <PriceArea markers={[{name:'Abertura', color:'rgba(171, 200, 255, 0.5)'}]} />
  <PriceArea />
  <PriceArea />
  <PriceArea />
  <PriceArea />
  <PriceArea />
  <PriceArea />
  <PriceArea />
  <PriceArea />
  <PriceArea markers={[{name:'Ajuste Ant.', color:'rgba(50, 41, 179, 0.5)'}]} />
  <PriceArea />
</main>
<Footer />
