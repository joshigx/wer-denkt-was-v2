<!--
  This Svelte component renders a list of dinosaurs and provides links to learn more about each one.

  Props:
  - `data` (PageProps): An object containing the data for the page, including a `dinosaurs` array.

  Reactive Variables:
  - `dinosaurs`: Extracted from the `data` prop, this is an array of dinosaur objects.

  Template:
  - Displays a heading and a description paragraph.
  - Iterates over the `dinosaurs` array using the `{#each}` block.
  - For each dinosaur, renders a clickable link with the dinosaur's name, which navigates to a route based on the dinosaur's lowercase name.

  Notes:
  - The `dinosaur.name` is used as the key for the `{#each}` block to optimize rendering.
  - The `href` attribute dynamically generates the URL for each dinosaur.
-->
<script lang="ts">
  import type { PageProps } from "./$types";

  //
  let { data }: PageProps = $props();
  let dinosaurs = data.dinosaurs;
</script>

<main>
  <h1>🦕 Dinosaur app</h1>
  <p>Click on a dinosaur below to learn more.</p>
  {#each dinosaurs as dinosaur (dinosaur.name)}
  <a href="/{dinosaur.name.toLowerCase()}" class="dinosaur">
    {dinosaur.name}
  </a>
  {/each}
</main>