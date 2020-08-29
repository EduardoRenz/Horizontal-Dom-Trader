<script lang="ts">
    import { onMount } from 'svelte';
    import Icon from '@iconify/svelte';
    import clockFill from '@iconify/icons-bi/clock-fill';
    import { getFormatedTime } from '../../utils'
    import type  IIndicator from './IIndicator'
    import Indicator from './Indicator.svelte'
    let clock;
    let clock_width;
    let indicators : IIndicator[] = [{name:'Payroll', time:new Date('2020-01-02 10:00:00'), relevance:3}]

    onMount(()=>{
        clock_width = clock.offsetWidth
    })

    let time_now : string = getFormatedTime(new Date)
    setInterval(()=>{ 
        time_now = getFormatedTime(new Date)
    },1000)  


</script>

<div id="clock" bind:this={clock}>
    <Icon width="20px" height="20px" icon={clockFill} />
    <div class="clock-bottom">
        <h4>{time_now}</h4>
        <div class="triangle-down"></div>
    </div>

    <ul class="indicators-list" style="width:{clock_width}px">
        {#each indicators as indicator}
            <li><Indicator {indicator} /></li>
        {/each}

    </ul>

</div>
<style>
    #clock {
        display: flex;
        justify-content: center;
        align-items: center;
        font-style: normal;
        cursor: pointer;
        padding: var(--padding) 5px;
        border-radius: 3px;
        transition: all 0.2s;
    }
    #clock:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
    #clock:hover .triangle-down {
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-top: 8px solid white;
    }   
    h4 {
        font-style: normal;
        font-weight: normal;
        font-size: 21px;
        margin-left: 10px;
        user-select: none;
    }

    .clock-bottom{
        margin-top: 9px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .triangle-down {
        width: 20px;
        height: 0px;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-top: 8px solid #555;
    }
    .indicators-list {
        position: absolute;
        top:40px;
        display: block;
        background-color: var(--background);
        width:var(--clock-width);
        border: 1px solid var(--light-gray);
        z-index: 1;
        list-style: none;
        padding: 5px 4px;
    }

</style>