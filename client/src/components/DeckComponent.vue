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
        'hidden': this.dealType === true,
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

}

.deal {
  visibility: hidden;
  max-width: 10px;
}

.hidden{
  visibility:hidden;
}
</style>
