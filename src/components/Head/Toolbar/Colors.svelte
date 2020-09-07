<script lang="ts">
  import Icon from "@iconify/svelte";
  import paintBrush from "@iconify/icons-fa/paint-brush";
  import Overlay from '../../Tools/Overlay.svelte'
  let modal:boolean
</script>

<style>
  .active {
    opacity: 1;
  }
  button {
    transition: opacity var(--transition-speed) ease;
    opacity: 0.5;
    height:  28px;
  }
  button:hover {
    opacity: 1;
  }
  button:hover, .active{
        opacity:1 !important;
        display: inline !important;
    }
 
</style>
<Overlay  bind:modal={modal} >
    <button slot="button" on:click={e => modal = !modal} class:active={modal}>
     <Icon icon={paintBrush} style="color: #ffffff; font-size: 18px;" />
    </button>
    <div slot="content" class="option-modal"> 
s
    </div>
</Overlay>