<script>
    import Clock from '../Clock/Clock.svelte'
    import Toolbar from '../Head/Toolbar.svelte'
    import PlayBar from '../PlayBar/PlayBar.svelte'
</script>
<header>
    <h2 >Trader - DOLW20</h2>
    <div class="right">
        <Toolbar/> 
        <PlayBar/>
        <Clock/>
    </div>

</header>

<style>
    h2 {
        color:var(--light-gray);
    }
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--darken-background);
        box-shadow: var(--shadow);
        padding: 12px;
        height: 100%;
        grid-area: header;
    }
    .right {
        display: flex;
        align-items: center;
        gap: 12px;
    }
</style>
