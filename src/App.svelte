<script lang="ts">
  import { onMount } from 'svelte';
  import { time_now,last_agression_time, agressions, offers } from './store'
  import Head from "./components/Head.svelte";
  import Footer from "./components/Footer.svelte";
  import PriceArea from "./components/PriceArea/PriceArea.svelte";
  let main

  onMount(async () => {
    main.addEventListener('wheel',scrollHorizontal)
    setInterval(()=>{ 
        time_now.set(new Date()) 
        //Simulations
        agressions.update(agr=> { return [
          { agressor_id:Math.floor(Math.random() * 3) + 1,
            time:new Date(),price:5384.5,
            ticks_consumed:1,
            lots:Math.floor(Math.random() * 50) + 1,
            type:'sell'},...agr]})
 
        offers.update(offrs => { 
          let new_offers = $offers
          new_offers["5384.5"] = [...new_offers["5384.5"],{player_id:Math.floor(Math.random() * 3) + 1,lots:Math.floor(Math.random() * 100) + 1}]
          return new_offers
        } )
    },1000)  
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
<main bind:this={main}>
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
