<template lang="html">
    <aside :class="deckTypeClass">
        <playing-card v-for="(card, index) in deckArray" :key="index" :card="card" :status="[]" :current="deckArray"/>
    </aside>
</template>

<script>
import PlayingCard from './PlayingCard.vue'
export default {
  name: 'deck-component',
  data() {
    return {
      dealType: this.deal,
      discardType: this.discard,
    }
  },
  props: ['deckArray', 'deal', 'discard'],
  components: {
    'playing-card': PlayingCard
  },
  computed: {
    deckTypeClass() {
      return{
        'discard': this.discardType === true,
        'deal': this.dealType === true,
        // 'hidden': this.dealType === true,
        'card-deck': true
      }

    }
  }
}
</script>

<style lang="css" scoped>
.card-deck.hidden{
  max-width: 100px;
  display: flex;
}

.card-deck{
  max-width: 5%;
}

.discard {
  opacity: 0.3;
  position: absolute;
  right:100px;
  top: calc(50% - 100px);
}

.deal {
  visibility: hidden;
  max-width: 10px;
  grid-column: 1/ span 1;
  position: absolute;
  left:100px;
  top: calc(50% - 100px);
}

.deal .playing-card {
  /* position:absolute; */
  /* position: relative; */
  /* left:100px; */
  /* top: 0; */
  margin-top: -280px;

}

.deal .playing-card .first {
  /* position:absolute; */
  /* position: relative; */
  /* left:100px; */
  /* top: 0; */
  z-index: 10;

}



.hidden{
  visibility:hidden;
}
</style>
