<!-- Represents the whole price column -->
<script type="ts">
    import { derived } from 'svelte/store'
    import { offers,agressions,last_price,last_agression_time,agressions_limit_show } from '../../store.js'
    import { getFormatedTime,dateIsLowerThan , getPriceID} from '../../utils'
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

    const price_agressions = derived(agressions,$agressions => $agressions.slice(0,$agressions_limit_show).filter(agression=>agression.price === price))
    const price_offers = derived(offers,$offers => $offers[price] ) 
    let price_total = derived( price_offers, () => $price_offers?.map( offer => offer.lots  )?.reduce((acc,agg)=>{ return acc + agg },0) || 0)

    let last_agression = derived(price_agressions, ()=> $price_agressions?.map(agression => agression.time)
                        .reduce((agg,acc)=>{ return dateIsLowerThan(acc,agg) ? agg : acc},price_agressions[0]?.time) || price_agressions[0]?.time)

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
    color:white;
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
    opacity: 1;
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
  .price-last-agression {
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    text-align: center;
    margin-bottom:5px;
    color: var(--light-text);
    font-size: 10px;
    height: 36px;
  }
  .last-agression {
    font-weight: bold;
  }
</style>

<section id={getPriceID(price)} class="price-area" class:current-price={price == $last_price} class:limit={isLimit}>
  <header>
    <Note {price} />
    <PriceMarker {markers} />
  </header>
  <article >
    <Offers offers={$price_offers} />
    <PriceLine {price} />
    <span class="price-sum" class:text-sell={$last_price>price} class:text-buy={$last_price<price} class:text-light={$price_total ===0}>
      {$price_total}
    </span>
    <small class="price-last-agression" class:last-agression={$last_agression_time === $last_agression }>
     { last_agression && getFormatedTime($last_agression) ||''}
    </small>
    <Agressions price_agressions={$price_agressions}/>
    <VAP agressions={$price_agressions} />
  </article>
</section>
