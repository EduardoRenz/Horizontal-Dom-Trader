<script lang="ts">
    import type  IIndicator from './IIndicator'
    export let indicator : IIndicator
</script>

<div>
    <h4>{indicator.time}</h4>
    <p>{indicator.name}</p>
    <div>
        {indicator.relevance}
    </div>
</div>
<style>
    p {
        color: var(--light-gray);
        font-size: 10px;
        line-height: 12px;
        text-align: center;
    }
</style>