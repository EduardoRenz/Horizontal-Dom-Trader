<script lang="ts">
    import { onMount } from 'svelte';
    import { time_now } from '../../store'
    import Icon from '@iconify/svelte';
    import clockFill from '@iconify/icons-bi/clock-fill';
    import { getFormatedTime } from '../../utils'
    import type  IIndicator from './IIndicator'
    import Indicator from './Indicator.svelte'
    let clock;
    let clock_width;

    onMount(()=>{
        clock_width = clock.offsetWidth
    })

    function dateIsLowerThan(main_date:Date,date_to_compare:Date){
        return main_date < date_to_compare;
    }


    let indicators : IIndicator[] = [
        {name:'Payroll', time:new Date('2020-08-29 09:30:00'), relevance:3},
        {name:'Indicador X longest name', time:new Date('2020-08-29 10:00:00'), relevance:1},
        {name:'Fally', time:new Date('2020-08-29 18:00:00'), relevance:2}
    ]


</script>

<div id="clock" bind:this={clock}>
    <Icon width="20px" height="20px" icon={clockFill} />
    <div class="clock-bottom">
        <h4>{getFormatedTime($time_now)}</h4>
        <div class="triangle-down"></div>
    </div>
    <ul class="indicators-list" style="width:{clock_width}px">
        {#each indicators as indicator}
            <li class:on-past={dateIsLowerThan(indicator.time,$time_now)}>
                <Indicator {indicator} />
                <hr>
            </li>
        {/each}
    </ul>
</div>
<style>
    h4 {
        font-size: 21px;
        margin-left: 10px;
        user-select: none;
    }
    
    hr {
        display: block;
        height: 1px;
        background: white;
    }
 
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
    #clock:hover .indicators-list {
        display: block;
    }
    #clock:hover .triangle-down {
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-top: 8px solid white;
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
        display:none;
        position: absolute;
        top:40px;
        background-color: var(--background);
        width:var(--clock-width);
        border: 1px solid var(--light-gray);
        z-index: 1;
        list-style: none;
        padding: 5px 4px;
    }

    .indicators-list :last-child  > hr {
        display: none;
    }
    .on-past {
        opacity: 0.5;
    }

</style>