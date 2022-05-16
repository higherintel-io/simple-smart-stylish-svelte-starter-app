<script>
  export let image, price, title, description;
</script>

<div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt={title} /></figure>
  <div class="card-body">
    <h2 class="card-title">
      {title}
      <div class="badge badge-secondary">Live</div>
    </h2>
    <p>{description}</p>
    <div class="card-actions justify-end items-baseline">
      <span class="text-sm">
        <span class="text-base font-black">{price}</span>
        <span class="text-sm pr-1">/mo</span>
      </span>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</div>
