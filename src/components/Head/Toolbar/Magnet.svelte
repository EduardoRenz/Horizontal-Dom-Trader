<script>
    import Icon from '@iconify/svelte';
    import magnetIcon from '@iconify/icons-el/magnet';
    import { follow_last_price } from '../../../store'

    function switchFollow(){
        follow_last_price.update(last=>last=!last)
    }
</script>
<button class:active={$follow_last_price} on:click={switchFollow}>
    <Icon icon={magnetIcon} style="color: #ffffff; font-size: 18px;" />
</button>


<style>
    .active {
        opacity: 1;
    }
    button {
        transition: opacity var(--transition-speed) ease;
        opacity: 0.5;
    }
    button:hover{
        opacity:1;
    }
</style>