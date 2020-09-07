<script type="ts">
    export let modal : boolean = false
</script>
<div class="overlay">
    <slot></slot>
    <slot name="button"></slot>
    <div class="content" class:active={modal}>
        <slot  name="content"></slot>
    </div>
    <div class="overlay-background" on:click={e => modal = false}  class:active={modal}></div>
</div>
<style>
    .overlay {
        position: relative;
    }
    .overlay-background {
        top: 0px;
        left: 0px;
        position: fixed;
        width: 100%;
        height: 100%;
        /* background: red; */
        opacity: 0.2!important;
        z-index: 0;
        display: none;
    }
    .content {
        position: absolute;
        right: 0px;
        z-index: 1000;
        display: none;
    }
    .active {
        display: block;
    }
</style>