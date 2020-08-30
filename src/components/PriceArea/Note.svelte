<!-- Represents the user annotations on each price -->
<script lang="ts">
    import { onMount } from 'svelte';
    import Icon from '@iconify/svelte';
    import editFilled from '@iconify/icons-ant-design/edit-filled';
    export let price : number
    let note_element;
    let editing = false;
    let note : string = ''
    let price_id = 'price_'+price.toFixed(1).replace('.','_')

    
    onMount(()=>{
        note = localStorage.getItem(price_id) || ''
        editing = isEditing()
        note_element.addEventListener('blur',()=> handleBlur())
    })

    const isEditing = () => note.trim() == '' ? false : true

    const handleClick = ()=>{
        editing = true; 
        setTimeout(() =>{note_element.focus()},100)
    }
    const handleBlur = ()=>{
        editing = isEditing()
    }
    const handleKeyUp = (evt)=>{
        if(evt.key == "Enter") {
            console.log('note changed')
            localStorage.setItem(price_id,note)
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