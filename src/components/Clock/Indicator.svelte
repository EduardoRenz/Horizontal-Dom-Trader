<script lang="ts">
    import Icon from '@iconify/svelte';
    import oxIcon from '@iconify/icons-cryptocurrency/ox';
    import { getFormatedTime } from '../../utils'
    import type  IIndicator from './IIndicator'
    export let indicator : IIndicator
</script>

<div class="indicator">
    <time>{getFormatedTime(indicator.time)}</time>
    <small>{indicator.name}</small>
    <div class="relevance">
        {#each Array(indicator.relevance) as _, i}
            <Icon icon={oxIcon} />
        {/each}
    </div>
</div>
<style>

    small {
        display: block;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    time {
        display: block;
        text-align: center;
    }
    .relevance {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        padding-top: 3px;
    }
    .indicator {
        margin-bottom: 10px;
    }
    .indicator > * {
        margin:5px;
    }
</style>