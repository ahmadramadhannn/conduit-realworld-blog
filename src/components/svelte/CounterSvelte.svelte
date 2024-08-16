<script>
  // your script goes here
  let count = 0;

  const increment = () => count++;
</script>

<div>
  <p>count now in svelte {count}</p>

  <button on:mousedown={increment}>add count</button>
</div>
