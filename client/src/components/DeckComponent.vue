<template lang="html">
    <aside id="deck">
      This is where the deck is
    </aside>



</template>

<script>
import PlayingCard from './PlayingCard.vue'
export default {
  name: 'deck-component',
  props: ['deckArray'],
  components: {
    'playing-card': PlayingCard
  }
}
</script>

<style lang="css" scoped>
</style>
