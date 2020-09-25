<script>
  import Icon from "@iconify/svelte";
  import controllerFastBackward from "@iconify/icons-entypo/controller-fast-backward";
  import controllerFastForward from "@iconify/icons-entypo/controller-fast-forward";
  import controllerPlay from "@iconify/icons-entypo/controller-play";
  import controllerStop from "@iconify/icons-entypo/controller-stop";
  import controllerPaus from "@iconify/icons-entypo/controller-paus";
  import bxsDownload from "@iconify/icons-bx/bxs-download";
  import{ agressions, simulation } from '../../store'

  let file
  $:progress = 0


  function handleFile(){
      const reader = new FileReader();
      reader.readAsDataURL(file.files[0]);
      reader.onloadstart = ()=>{
        simulation.update((last)=>{return {...last,status:'loading'}})
      }

      reader.onprogress = (data)=>{
        if (data.lengthComputable) {                                            
                progress = parseInt( ((data.loaded / data.total) * 100), 10 );
                console.log(progress);
            }
      }

      reader.onloadend = ()=>{
          let decoded = atob(reader.result.split('base64,')[1])
          simulation.update((last)=>{return {...last,agressions:decoded,status:'paused'}})
          progress = 0
      }
  }

</script>

<style>
  button,label {
    transition: opacity var(--transition-speed) ease;
    opacity: 0.8;
    height: 28px;
  }
  button:hover ,label:hover{
    opacity: 1;
  }
  .buttons {
    display: flex;
    padding: 0 var(--padding);
  }
  .options-buttons {
    display: flex;
    justify-content: start;
  }

  .play-bar-buttons {
    display: flex;
    justify-content: center;
    gap: 5px;
    width: 100%;
  }

  .progress-bar {
    display: block;
    min-width: 415px;
    height: 5px;
    background: var(--light-gray);
    border-radius: var(--border-radius);
  }
  .progress {
    position: relative;
    height: 100%;
    background: var(--primary);
    border-radius: var(--border-radius);
  }

  input {
    width: 0.1px;
	height: 0.1px;
    position: absolute;
      /* opacity: 0; */
  }
  label {
      cursor: pointer;
  }
  .disabled {
      display: none;
  }
</style>

<section>
  <menu class="buttons">
    <div class="options-buttons">
      <label data-title="Fazer upload de arquivo de simulação"  for="file_upload">
          <input type="file" id="file_upload" bind:this={file} on:change={()=>handleFile()}>
        <Icon
          icon={bxsDownload}
          height="24px"
          width="26px"
          color="var(--light-gray)" />
      </label>
    </div>
    <div class="play-bar-buttons" class:disabled={!$simulation.status || !$simulation.status == 'loading'}>
      <button>
        <Icon
          icon={controllerFastBackward}
          height="24px"
          width="26px"
          color="var(--light-gray)" />
      </button>
      <button>
        <Icon
          icon={controllerStop}
          height="24px"
          width="26px"
          color="var(--light-gray)" />
      </button>
      <button on:click={() => ($simulation.status = $simulation.status == 'paused' ? 'playing' : 'paused')}>
        <Icon
          icon={$simulation.status == 'playing' ? controllerPaus : controllerPlay}
          height="24px"
          width="26px"
          color="var(--light-gray)" />
      </button>
      <button>
        <Icon
          icon={controllerFastForward}
          height="24px"
          width="26px"
          color="var(--light-gray)" />
      </button>
    </div>

  </menu>
  <div class="progress-bar">
    <div class="progress" style={`width:${progress}`} />
  </div>
</section>
