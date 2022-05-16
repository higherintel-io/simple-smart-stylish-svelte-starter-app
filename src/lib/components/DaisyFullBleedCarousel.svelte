<!-- ref: https://daisyui.com/components/carousel/#slide3-->
<script>
  import DaisyCardWithBadge from '$lib/components/DaisyCardWithBadge.svelte';
  export let data;
</script>

<div class="carousel carousel-center max-w-screen-xl p-4 space-x-4  rounded-box">
  {#each data as slide, i}
    <div class="carousel-item">
      <DaisyCardWithBadge {...slide} />
    </div>
  {/each}
</div>
