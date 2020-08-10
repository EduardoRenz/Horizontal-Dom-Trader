<script lang="ts">
  import Head from "./components/Head.svelte";
  import Footer from "./components/Footer.svelte";
  import PriceArea from "./components/PriceArea/PriceArea.svelte";
</script>

<style>
  main {
    display: grid;
    grid-template-areas:
      "header"
      "main"
      "footer";
    grid-template-rows: 53px 1fr 102px;
    grid-area: main;
    display: flex;
    /* background-image:repeating-linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2),rgba(255, 255, 255, 0) 1px, transparent 1px, transparent 117px); */
  }
</style>

<Head />
<main>
  <PriceArea />
  <PriceArea />
  <PriceArea />
  <PriceArea />
  <PriceArea />
  <PriceArea />
  <PriceArea />
  <PriceArea />
  <PriceArea />
  <PriceArea />
  <PriceArea />
  <PriceArea />
</main>
<Footer />
