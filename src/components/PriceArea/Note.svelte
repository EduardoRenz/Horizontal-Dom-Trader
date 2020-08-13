<!-- Represents the user annotations on each price -->
<script>
    import Icon from '@iconify/svelte';
    import editFilled from '@iconify/icons-ant-design/edit-filled';
</script>
<button class="edit-icon">
    <Icon  icon={editFilled} width="24px" />
</button>
<style>
    .edit-icon{
        opacity: var(--opacity);
        margin: 4px 0;
    }
    .edit-icon:hover{
        opacity: 1;
    }
</style>