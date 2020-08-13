<!-- Represents the whole price column -->
<script type="ts">
    import Note from './Note.svelte'
    import PriceMarker from './PriceMarker.svelte'
    import PriceLine from './PriceLine.svelte'
    import Offers from './Offers/Offers.svelte'
    import type  { IMarker } from './IMarker'
    import type IOffer from "./Offers/IOffer"
    export let price : number
    export let markers : IMarker[] = null
    export let isLimit : boolean = false

    import { offers } from '../../store.js'

    const price_offers: IOffer[]  = $offers[price] 

</script>

<style>
  .price-area {
    display: flex;
    flex-direction: column;
    align-items: center;

    min-width: 117px;
    height: calc(100% - 8px);
    margin-top: 4px;

    border-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0)
      )
      1 100%;
    border-width: 1px;
    border-style: solid;
    border-left: none;
  }
  .limit {
    border-width:0 4px;
    border-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 230, 0, 0.5),
        rgba(255, 255, 255, 0)
      )
      1 100%;
  }
  header {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 87px;
    min-height: 87px;
  }

  article  {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;

  }
</style>

<div class="price-area" class:limit={isLimit}>
  <header>
    <Note />
    <PriceMarker {markers} />
  </header>
  <article >
    <Offers offers={price_offers} />
    <PriceLine {price} />
  </article>
 


</div>
