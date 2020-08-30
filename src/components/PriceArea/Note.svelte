<!-- Represents the user annotations on each price -->
<script lang="ts">
    import { onMount } from 'svelte';
    import Icon from '@iconify/svelte';
    import editFilled from '@iconify/icons-ant-design/edit-filled';
    let note_element;
    let editing = false;
    let note : string = ''

    onMount(()=>{
        note_element.addEventListener('blur',()=> handleBlur())
    })

    const handleClick = ()=>{
        editing = true; 
        setTimeout(() =>{note_element.focus()},100)
    }
    const handleBlur = ()=>{
        editing = note.trim() == '' ? false : true
    }
    const handleKeyUp = (evt)=>{
        if(evt.key == "Enter") {
            note_element.blur()
        }
    }

</script>
<div class="note-area" >
    <button class="edit-icon" style={`display:${editing ? 'none' : 'block'}`} on:click={handleClick}  >
        <Icon  icon={editFilled} width="24px" />
    </button>
    <input type="text" style={`display:${editing ? 'block' : 'none'}`} bind:this={note_element} bind:value={note} on:keyup={ handleKeyUp}>
</div>

<style>
    input {
        background: #3F4147;
        border-radius: 2px;
        height: 27px;
        width: 100%;
        margin: 4px var(--margin);
        text-align: center;
    }

    .note-area {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .edit-icon{
        opacity: var(--opacity);
        margin: 4px 0;
    }
    .edit-icon:hover{
        opacity: 1;
    }
</style>