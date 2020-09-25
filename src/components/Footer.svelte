<script>
    import Ranking from './Ranking/Ranking.svelte'
    import Renkko from "./Charts/Renkko.svelte"
</script>
<footer>
    <!-- <Renkko /> -->
    <Ranking selected={"c_5"} />
    <Ranking selected={"v_5"}/>
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