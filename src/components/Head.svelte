<script>
    import Clock from '../components/Clock/Clock.svelte'
</script>
<header>
    <h2>Trader - DOLW20</h2>
    <Clock/>
</header>

<style>
    h2 {
        color:var(--light-gray);
    }
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        box-shadow: var(--shadow);
        padding: 12px;
        height: 100%;
        grid-area: header;
    }
</style>
