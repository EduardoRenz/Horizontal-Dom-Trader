<script>
    import Options from './Toolbar/Options.svelte'
    import Magnet from "./Toolbar/Magnet.svelte"
    import Colors from "./Toolbar/Colors.svelte"
</script>

<span>
    <Colors/>
    <Options/>
    <Magnet />
</span>


<style>
    span {
        display: flex;
        border-bottom: 1px solid var(--light-gray);
        gap:10px;
    }
</style>
