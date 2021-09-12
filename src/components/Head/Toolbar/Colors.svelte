<script lang="ts">
  import Icon from "@iconify/svelte";
  import paintBrush from "@iconify/icons-fa/paint-brush";
  import Overlay from "../../Tools/Overlay.svelte";
  import { color_config } from "../../../store";
  let modal: boolean;
</script>

<Overlay bind:modal>
  <button
    slot="button"
    on:click={(e) => (modal = !modal)}
    class:active={modal}
    name="colors"
  >
    <Icon icon={paintBrush} style="color: #ffffff; font-size: 18px;" />
  </button>
  <div slot="content" class="option-modal">
    <div class="checkoxes">
      <fieldset>
        <label for="destaque_ofertas">Destacar Ofertas:</label>
        <input
          type="checkbox"
          id="destaque_ofertas"
          bind:checked={$color_config.offers}
        />
      </fieldset>
      <fieldset>
        <label for="destaque_agressoes">Destacar Agressões:</label>
        <input
          type="checkbox"
          id="destaque_agressoes"
          bind:checked={$color_config.agressions}
        />
      </fieldset>
    </div>
    <div>
      <legend style="margin-bottom:10px">Coloração de Quantidades:</legend>
      <table>
        <thead>
          <tr>
            <th>Min</th>
            <th>Max</th>
            <th>Cor</th>
            <th>Fonte</th>
          </tr>
        </thead>
        <tbody>
          {#each $color_config.ranges as range}
            <tr>
              <td>
                <input type="number" bind:value={range.min} min="1" />
              </td>
              <td>
                <input type="number" bind:value={range.max} min="2" />
              </td>
              <td>
                <input type="color" name="color" bind:value={range.color} />
              </td>
              <td>
                <input
                  type="color"
                  name="color"
                  bind:value={range.text_color}
                />
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</Overlay>

<style>
  .active {
    opacity: 1;
  }
  button {
    transition: opacity var(--transition-speed) ease;
    opacity: 0.5;
    height: 28px;
  }
  button:hover {
    opacity: 1;
  }
  button:hover,
  .active {
    opacity: 1 !important;
    display: inline !important;
  }
  fieldset {
    display: flex;
    gap: 5px;
    margin-bottom: 5px;
  }

  input[type="number"] {
    width: 100%;
    min-width: 62px;
    /* max-width: 62px; */
  }

  .checkoxes {
    display: flex;
    gap: 15px;
    margin-bottom: 10px;
  }
</style>
