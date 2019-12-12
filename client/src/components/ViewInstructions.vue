<template lang="html">
  <section id="view-instructions-wrapper">

    <!-- Insert Components Needed To Render Entire Deck Here  -->
    <!-- Blank Page for inserting the instructions -->
    <h1>How our version of Timeline works</h1>
    <p class="instructions-text">Timeline is a game in which players learn about history. Each card has a year hidden from the player, and they must use their knowledge to place cards in the correct order.</p>
    <p class="instructions-text">We've created a one player variation of the game for us to initially build the app. Future iterations of the project will incorporate 2 or more human players, and competitive computer AI players, to play against.</p>

    <h2>The 1 player variation of the game works as following:</h2>
    <ol class="instructions-text">
      <li>The computer shuffles the deck from our database.</li>
      <li>One card, the starter card, is placed face-up in the middle of the board.</li>
      <li>A small hand of four cards is dealt, facedown at random to the player.</li>
      <li>The player must choose a card and place it facedown either to the left or right of cards already on the board. Placing it to the left indicates that they believe that the event on the card took place BEFORE the date already displayed on cards to the right of it, and similarly any cards to the right of the card must have taken place AFTER.</li>
      <li>The computer reveals the year of your card, and evaluates if it is in the correct position.</li>
      <li>If correct, you go again and play continues until you lose or run out of cards to place.</li>
    </ol>
  </section>
</template>

<script>
import PlayingCard from './PlayingCard.vue'

export default {
  name: 'view-instructions',

  data(){
    return {
      currentDeck: []
    }
  },

  components: {
    'playing-card': PlayingCard
  },

  mounted() {
    // this.gameSetup();
    // this.deckSetup
  },

  methods: {
    deckSetup(){
      // get all the data
      // understand the data
      // return these cards as a full deck called 'this.currentDeck'
    }
  }
}
</script>

<style lang="css" scoped>

#view-instructions-wrapper{
  grid-row: 2 / 3;
  grid-column: 1 / 4;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1em;
  align-items: center;
  min-height: 35em;
  /* padding: 0; */
  font-family: 'Ubuntu', sans-serif;
  line-height: 1.5em;
}

h1 {
  margin: ;
	padding: ;
	border: ;
	font-size: 1.35em;
  font-weight: bold;
	/* font-family: Merriweather; */
	vertical-align: ;
  color: rgba(248, 188, 7, 0.9);
  color: rgba(207, 84, 54);
  /* text-decoration: underline; */
}

h2 {
  margin: ;
	padding: ;
	border: ;
	font-size: 1.35em;
  font-weight: bold;
	/* font-family: Merriweather; */
	vertical-align: ;
  color: rgba(248, 188, 7, 0.9);
  color: rgba(207, 84, 54);
  /* text-decoration: underline; */
}

.instructions-text {
  /* font-size: 2em; */

}

ol, ul {
	list-style-type: decimal;
  /* list-style-image: url('../../public/timeline-logo.png'); */
  margin-left: 3em;
  /* display: flex;
  flex-direction: row; */
}

/* li {
  margin-left: 50px;
  margin-top: 0px;
} */



/* #view-instructions-wrapper {
  padding: 0;
} */

</style>
