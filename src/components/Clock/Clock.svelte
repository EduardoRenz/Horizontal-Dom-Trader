<script lang="ts">
    import Icon from '@iconify/svelte';
    import clockFill from '@iconify/icons-bi/clock-fill';
    let now : string ="loading..."
    
    setInterval(()=>{ 
        const date = new Date()
        now = ` ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getUTCSeconds()).padStart(2,"0")} ` ; 
    },1000)  

</script>

<div id="clock">
    <Icon width="20px" height="20px" icon={clockFill} />
    <div class="clock-bottom">
        <h4>{now}</h4>
        <div class="triangle-down"></div>
    </div>
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
</style>