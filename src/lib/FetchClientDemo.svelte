<script>
  import { request } from '$api/fetch-client';
  import DaisyFullBleedCarousel from '$lib/components/DaisyFullBleedCarousel.svelte';
  let progressValue = 0;

  const loadData = async () => {
    progressValue = 10;
    const response = await request('/mock/data.json');
    progressValue = 100;
    return response;
  };
  const data = loadData();
</script>

<div>
  {#await data}
    <span class="font-black text-red-900 text-3xl uppercase"> ...waiting <br /><progress class="progress w-56 progress-info" value={progressValue} max="100" /> </span>
  {:then data}
    <DaisyFullBleedCarousel {data} />
  {:catch error}
    {JSON.stringify(error)}
  {/await}
</div>
