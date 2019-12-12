<template lang="html">
  <section id="view-full-deck-wrapper">

    <section id="full-deck-button-container">
      <button v-on:click="sortByYear()" type="button">Sort by year</button>
      <button v-on:click="sortByDefault()" type="button">Sort by default</button>
    </section>

    <section class="view-flex-container" v-if="currentView === 'default'">
      <article class="database-item" v-for="(card, index) in currentDeck"  >
        <playing-card :card='card':key="index" :status="[]" :current="[]" />
        <aside class="extra-information">
          <h3>{{ card.title }}</h3>
          <p>{{ card.year }}</p>
          <p class="description">{{ card.description }}</p>
        </aside>
      </article>
    </section>

    <section class="view-flex-container" v-if="currentView === 'chronological'">
      <article class="database-item" v-for="(card, index) in currentDeck"  >
        <playing-card :card='card':key="index" />
        <aside class="extra-information">
          <h3>{{ card.title }}</h3>
          <p>{{ card.year }}</p>
          <p class="description">{{ card.description }}</p>
        </aside>
      </article>
    </section>

  </section>
</template>

<script>
import PlayingCard from './PlayingCard.vue'
export default {
  name: 'view-full-deck',

  data(){
    return {
      currentDeck: [],
      deckByYear: [],
      currentView: 'default'
    }
  },

  components: {
    'playing-card': PlayingCard
  },

  mounted() {
    // this.gameSetup();
    this.deckSetup();
  },

  methods: {
    deckSetup(){
      // get all the data
      return fetch('http://localhost:3000/api/cards')

      .then(res => res.json())

      .then(cards => this.currentDeck = cards)


      // understand the data
      // return these cards as a full deck called 'this.currentDeck'
    },

    sortByYear() {
      let copyOfCurrentDeck = this.currentDeck.map((card) => {return card});
      let chronologicallySortedCards = copyOfCurrentDeck.sort(function(a, b){
        if(parseInt(a.year) < parseInt(b.year)) { return -1; }
        if(parseInt(a.year) > parseInt(b.year)) { return 1; }
        return 0;
      })
      this.deckByYear = chronologicallySortedCards;
      this.currentView = 'chronological'
    },

    sortByDefault() {
      this.currentView = 'default'
    }
  }
}
</script>

<style lang="css" scoped>


#view-full-deck-wrapper{
  grid-row: 2 / 3;
  grid-column: 1 / 4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1em;
  align-items: center;
  /* min-height: 35em; */
  /* flex-wrap: wrap; */
}

#full-deck-button-container{
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background: red; */
  width: 40%;
}

.view-flex-container {
  margin-top: 1em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

}
.database-item{
  margin-bottom: 1em;
  margin-left: 1em;
  display: flex;
  flex-grow: 1;
  max-width: 45%;
  box-sizing: border-box;
  border: 1px solid red;
}

.extra-information{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 60%;
  margin-bottom: 1em;
  padding: 1em;
}

.extra-information h3{
  font-weight: 600;
  font-size: 1.6em;
}

.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: stretch;
  align-content: space-evenly;
}

.flex-item {
}


</style>
