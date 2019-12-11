<template lang="html">
  <section id="view-full-deck-wrapper">
<button v-on:click="sortByYear()" type="button">Sort by year</button>
<button v-on:click="sortByDefault()" type="button">Sort by default</button>
    <!-- Insert Components Needed To Render Entire Deck Here  -->
<ul class="flex-container" v-if="currentView === 'default'">
  <!-- Want the UL to be flex -->
  <li class="flex-item" v-for="(card, index) in currentDeck"  >
    <playing-card :card='card':key="index" />
    <!-- <p>{{ card.title}}</p> -->
    <p>{{ card.year}}</p>
    <p>{{ card.description }}</p>
  </li>
</ul>

<ul class="flex-container" v-if="currentView === 'chronological'" id="flex">
  <!-- Want the UL to be flex -->
  <li class="flex-item" v-for="(card, index) in deckByYear"  >
    <playing-card :card='card':key="index" />
    <!-- <p>{{ card.title}}</p> -->
    <p>{{ card.year}}</p>
    <p>{{ card.description }}</p>
  </li>
</ul>

    <!-- <playing-card v-for="(card, index) in currentDeck" :key="index" :card="card"/>
    <div v-for="(card, index) in currentDeck" :key="index"> -->

  </section>
</template>

<script>
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
  justify-content: space-evenly;
  padding: 1em;
  align-items: center;
  min-height: 35em;
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
