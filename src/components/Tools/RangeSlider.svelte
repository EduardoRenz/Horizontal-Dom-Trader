<script>
    export let min = 1
    export let max = 100
    export let value = 1
    export let step=1

    function generateRange() {
        let arr = []
        for (let index = min; index <= max; index+=step) {
            arr.push(index)
        }
        return arr
    }

</script>
<div class="slidecontainer">
    <input type="range" {min} {max} bind:value={value} {step} class="slider" list="tickmarks" >
    <datalist id="tickmarks">
        {#each generateRange() as value }
            <option {value} label={value}>
        {/each}
      </datalist>
</div>

<style>
.slidecontainer {
  width: 100%; 
}
.slider {
  -webkit-appearance: none;  
  appearance: none;
  width: 100%; 
  height: 5px; 
  background: var(--border); 
  outline: none; 
  opacity: 0.7; 
  -webkit-transition: .2s; 
  transition: opacity .2s;
}
.slider:hover {
  opacity: 1; 
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 11px; 
  height: 11px; 
  background: var(--primary);
  cursor: pointer;
}
.slider::-moz-range-thumb {
  width: 11px; 
  height: 11px; 
  background: var(--primary);
  cursor: pointer; 
}
datalist {
    width: 100%;
    justify-content: space-between;
    display: flex;
}

datalist option {
    color:var(--light-gray);
    font-size: 12px;
}
</style>