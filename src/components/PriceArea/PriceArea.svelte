<!-- Represents the whole price column -->
<script type="ts">
    import { offers,agressions,last_price } from '../../store.js'
    import Note from './Note.svelte'
    import PriceMarker from './PriceMarker.svelte'
    import PriceLine from './PriceLine.svelte'
    import Offers from '../Offers/Offers.svelte'
    import Agressions from '../Agressions/Agressions.svelte'
    import VAP from '../VAP/VAP.svelte'
    import type  { IMarker } from './IMarker'
    import type IOffer from "../Offers/IOffer"
    import type IAgression from "../Agressions/IAgression"

    export let price : number
    export let markers : IMarker[] = null
    export let isLimit : boolean = false

    const price_offers: IOffer[]  = $offers[price] 
    const price_agressions: IAgression[]  = $agressions.filter(agression=>agression.price === price)

    let price_total = price_offers?.map( offer => offer.lots  ).reduce((acc,agg)=>{ return acc + agg },0) || 0

    const getPriceSumColor = () =>{
      if(price_total=== 0)
        return "text-light"
      if($last_price>price)
        return "text-sell"
      if($last_price<price)
        return "text-buy"
    }
</script>

<style>

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
  .price-area {
    display: flex;
    flex-direction: column;
    align-items: center;

    min-width: 117px;
    width: 117px;
    height: calc(100% - 5px);
    margin-top: 4px;

    border-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0)
    ) 1 100%;
    border-width: 1px;
    border-style: solid;
    border-left: none; 
  }
  .current-price {
    background: linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(196, 196, 196, 0.2) 50.52%, rgba(196, 196, 196, 0) 100%);
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
  .price-sum{
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 4px 0;
    margin-bottom: var(--margin);
    font-weight: bold;
    font-size: 16px;
    min-height: 28px;
    max-height: 28px;
  }
  .text-light {
    font-weight: normal;
    opacity: 0.3;
    color: var(--light-gray);
  }
</style>

<section id={'price_'+price.toFixed(1).replace('.','_')} class={`price-area ${price == $last_price ? "current-price " : "" } `} class:limit={isLimit}>
  <header>
    <Note />
    <PriceMarker {markers} />
  </header>
  <article >
    <Offers offers={price_offers} />
    <PriceLine {price} />
    <span class={`price-sum ${getPriceSumColor()} `} >
      {price_total}
    </span>
    <Agressions agressions={price_agressions}/>
    <VAP agressions={price_agressions} />
  </article>
</section>
