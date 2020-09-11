<script>
    import Ranking from '../components/Ranking/Ranking.svelte'
</script>
<footer>
    <Ranking/>
    <Ranking/>
</footer>
<style>
    footer {
        max-height: 100%;
        overflow: hidden;
        grid-area: footer;
        box-shadow: var(--shadow);
        padding: var(--padding);
        display: flex;
        align-items: flex-start;
        justify-content: start;
        gap:2px;
    }
</style>