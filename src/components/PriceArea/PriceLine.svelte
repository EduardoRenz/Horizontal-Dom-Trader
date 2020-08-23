<script type="ts">
    import { lastPrice } from '../../store.js';
    export let price : Number

    const setPriceColor = () => {
        if($lastPrice === price)
            return ""
        return $lastPrice === price || $lastPrice < price ? "buy-area" : "sell-area"
    }
</script>
<style>
    .price {
        padding: 4px;
        background-color: rgba(255, 255, 255, 0.06);
        border: 1px solid var(--border);
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        min-height: 31px;
        max-height: 31px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        align-content: center;
    }
    .sell-area {
        background: var(--sell-light);
        border:1px solid transparent;
    }
    .buy-area {
        background: var(--buy-light);
        border:none;
        border:1px solid transparent;
    }
</style>
<div class="price {setPriceColor()}" >
    {price.toFixed(1)}
</div>