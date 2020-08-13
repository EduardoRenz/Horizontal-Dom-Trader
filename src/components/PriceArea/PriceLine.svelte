<script type="ts">
    export let price : Number
</script>
<style>
    .price {

        padding: 5px;
        background: var(--sell-light);

        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        align-content: center;
    }

</style>
<div class="price">
    {price}
</div>