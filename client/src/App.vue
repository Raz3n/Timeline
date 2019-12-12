<template lang="html">
  <div id="app">
    <nav>
      <section id="instructions" class="nav">
        <button v-on:click="selectViewInstructions" class="button" type="button" name="button">View Instructions</button>
      </section>
      <section id="play" class="nav">
        <img v-on:click="selectOnePlayerGame" id="logo-image" src="/timeline-logo.png" alt="Timeline Logo">
      </section>
      <section id="change-rules" class="nav">
        <button v-on:click="selectViewFullDeck" class="button" type="button" name="button">View Full Deck</button>
        <!-- <button v-on:click="selectOnePlayerGame" type="button" name="button">Play One Player</button> -->

      </section>

    </nav>
      <one-player-game  v-if="currentView === 'OnePlayerGame'" />
      <view-full-deck  v-if="currentView === 'ViewFullDeck'" />
      <view-instructions  v-if="currentView === 'ViewInstructions'" />
    <footer> <p>App by Naz and Friends</p> </footer>
</div>
</template>

<script>
import OnePlayerGame from './components/OnePlayerGame.vue';
import ViewFullDeck from './components/ViewFullDeck.vue';
import ViewInstructions from './components/ViewInstructions.vue';
import EndGame from './components/EndGame.vue';

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
    },
    selectViewInstructions(){
      this.currentView = "ViewInstructions"
    }
  },
  components: {
    'one-player-game': OnePlayerGame,
    'view-full-deck': ViewFullDeck,
    'view-instructions': ViewInstructions,
    'end-game': EndGame
  }
}
</script>

<style lang="css" scoped>
#app{
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  width: 100%;
  grid-template-rows: minmax(10%, 15%) 12fr 1fr;
  background: rgb(247,238,213);
background: linear-gradient(180deg, rgba(247,238,213,1) 0%, rgba(255,221,137,1) 48%, rgba(247,238,213,1) 100%);
}

nav{
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row: 1 / 2;
  background: rgba(248, 188, 7, 0.9);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  box-shadow: 0em 0.2em 0.4em grey;
}

#logo-image{
  max-width: 35%;
  padding: 0.3em;
}

#logo-image:hover{
  opacity: 0.8;
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
  display: flex;
  justify-content: center;
  padding: 1em;
  color:white;
  grid-row: 3 /4;
  grid-column: 1/4;
  background: rgba(248, 188, 7, 0.9);
}

footer p{
  opacity: 0.1;
  font-weight: 600;
}

@-webkit-keyframes highlighty {
  0% { opacity: 0;
  font-size: 1em;}
  100% { opacity: 1;
  font-size: 1.5em;}
}

@keyframes highlighty {
  0% { opacity: 0;
  font-size: 1em;}
  100% { opacity: 1;
  font-size: 1.5em;}
}


footer p:hover{
  opacity: 1;
  -webkit-animation: highlighty 0.5s;
  animation: highlighty 0.5s forwards;
}


</style>
