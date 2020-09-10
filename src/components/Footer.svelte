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
        display: grid;
        align-items: center;
        justify-content: start;
        grid-template-columns: repeat(3,minmax(300px,33%));
        gap:2px;
    }
</style>