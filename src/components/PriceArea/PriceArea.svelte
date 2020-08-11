<script type="ts">
    import Note from './Note.svelte'
    import PriceMarker from './PriceMarker.svelte'
    import type  { Marker } from './IMarker'
    export let markers : Marker[] = null


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
</style>

<div class="price-area">
    <Note />
    <PriceMarker markers={markers}/>
</div>
