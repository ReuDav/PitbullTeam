<script>
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<button title=""on:click={increment}>
  count is {count}
</button>
