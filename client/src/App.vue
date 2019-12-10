<template lang="html">
  <div id="app">
    <nav>
      <section id="instructions" class="nav">
        Instructions
      </section>
      <section id="play" class="nav">
        <img id="logo-image" src="/timeline-logo.png" alt="Timeline Logo">
      </section>
      <section id="change-rules" class="nav">
        <button v-on:click="selectViewFullDeck" type="button" name="button">View Full Deck</button>
        <button v-on:click="selectOnePlayerGame" type="button" name="button">Play One Player</button>

      </section>
    </nav>
      <one-player-game  v-if="currentView === 'OnePlayerGame'"/>
      <view-full-deck  v-if="currentView === 'ViewFullDeck'"/>
    <footer> Scores </footer>
</div>
</template>

<script>
import OnePlayerGame from './components/OnePlayerGame.vue';
import ViewFullDeck from './components/ViewFullDeck.vue';

export default {
  name: 'app',
  data() {
    return{
      currentView: "OnePlayerGame"
    }
  },
  methods: {
    selectViewFullDeck(){
      this.currentView = "ViewFullDeck"
    },
    selectOnePlayerGame(){
      this.currentView = "OnePlayerGame"
    }
  },
  components: {
    'one-player-game': OnePlayerGame,
    'view-full-deck': ViewFullDeck
  }
}
</script>

<style lang="css" scoped>
#app{
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 2fr 12fr 1fr;
  background: url('/table-background.png') no-repeat;
}

nav{
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row: 1 / 2;
  background: rgba(248, 188, 7, 0.9);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
}

#logo-image{
  max-width: 35%;
  padding: 0.3em;
}

.nav {

}

.nav#instructions{
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 2;

}

.nav#play {
  grid-column: 2/4;

}

.nav#change-rules{
  grid-column: 4/5;
}

#instructions, #play, #change-rules{
  display: flex;
  justify-content: center;
  align-items: center;
}

footer {
  grid-row: 3 /4;
  grid-column: 1/4;
  background: rgba(248, 188, 7, 0.9);
}


</style>
