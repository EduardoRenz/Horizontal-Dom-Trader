<script lang="ts">
    import Icon from '@iconify/svelte';
    import clockFill from '@iconify/icons-bi/clock-fill';
    let now : string ="loading..."
    
    setInterval(()=>{ 
        const date = new Date()
        now = ` ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}:${String(date.getUTCSeconds()).padStart(2,"0")} ` ; 
    },1000)  

</script>

<aside>
    <Icon width="20px" height="20px" icon={clockFill} />
    <div class="clock-bottom">
        <h4>{now}</h4>
        <div class="triangle-down"></div>
    </div>
</aside>

<style>
    aside {
        display: flex;
        justify-content: center;
        align-items: center;
        font-style: normal;
    }
    h4 {
        font-style: normal;
        font-weight: normal;
        font-size: 21px;
        line-height: 25px;
        margin-left: 10px;
    }

    .clock-bottom{
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