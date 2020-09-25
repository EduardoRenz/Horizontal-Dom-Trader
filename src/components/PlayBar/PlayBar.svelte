<script>
  import Icon from "@iconify/svelte";
  import controllerFastBackward from "@iconify/icons-entypo/controller-fast-backward";
  import controllerFastForward from "@iconify/icons-entypo/controller-fast-forward";
  import controllerPlay from "@iconify/icons-entypo/controller-play";
  import controllerStop from "@iconify/icons-entypo/controller-stop";
  import bxsDownload from '@iconify/icons-bx/bxs-download';
</script>

<style>
  button {
    transition: opacity var(--transition-speed) ease;
    opacity: 0.8;
    height: 28px;
  }
  button:hover {
    opacity: 1;
  }
  .buttons {
    display: flex;
    padding: 0 var(--padding);
  }
  .options-buttons  {
    display: flex;
    justify-content: start;
  }
  
  .play-bar-buttons{
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
  .progress{
      position: relative;
      height: 100%;
      background: var(--primary);
      border-radius: var(--border-radius);
  }
</style>

<section>
  <menu class="buttons">
    <div class="options-buttons">
      <button>
        <Icon
          icon={bxsDownload}
          height="24px"
          width="26px"
          color="var(--light-gray)" />
      </button>
    </div>
    <div class="play-bar-buttons">
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
      <button>
        <Icon
          icon={controllerPlay}
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
    <div class="progress" style={`width:50%`}  />
  </div>
</section>
