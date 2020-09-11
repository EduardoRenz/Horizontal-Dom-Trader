<script type="ts">
    import { beforeUpdate } from 'svelte'
    import Icon from '@iconify/svelte';
    import options2Fill from '@iconify/icons-eva/options-2-fill';
    import Overlay from '../../Tools/Overlay.svelte'
    import RangeSlider from '../../Tools/RangeSlider.svelte'
    import { agressions_limit_show } from '../../../store'
    let modal:boolean
    let agression_limit = $agressions_limit_show

    beforeUpdate(()=>{
        agressions_limit_show.set(agression_limit)
    })

</script>

<Overlay  bind:modal={modal}>
    <button slot="button" on:click={e => modal = !modal} class:active={modal} >
        <Icon icon={options2Fill} height="25px" style="color:white" />   
    </button>
    <div slot="content" class="option-modal" >
        <legend>Quantidade de Agressões: <strong>{agression_limit}</strong></legend>
        <RangeSlider bind:value={agression_limit} min={50} max={200} step={25} />
    </div>
</Overlay>

<style>
    button {
        opacity: 0.5;
        transition: opacity var(--transition-speed) ease-in;
    }
    button:hover, .active{
        opacity:1 !important;
        display: inline !important;
    }
</style>