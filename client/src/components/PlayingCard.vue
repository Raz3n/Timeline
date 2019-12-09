<template lang="html">
  <article class="playing-card">
    <p> Short Title:</p>
    <img src="blank" alt="Title"/>
    <p class="hidden">Year: </p>
  </article>
</template>

<script>
export default {
  name: 'playing-card',
  props: ['card']
}
</script>

<style lang="css" scoped>
</style>
