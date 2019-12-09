<template lang="html">
  <div id="app">
    <nav>
      <section id="instructions" class="nav">
        Instructions
      </section>
      <section id="play" class="nav">
        Play
      </section>
      <section id="change-rules" class="nav">
        Change Rules
      </section>
    </nav>
    <section id="play-area-container">
      <one-player-game />
      Player Hand
    </section>
    <footer> Scores </footer>
</div>
</template>

<script>
import OnePlayerGame from './components/OnePlayerGame.vue'
export default {
  name: 'app',
  components: {
    'one-player-game': OnePlayerGame
  }
}
</script>

<style lang="css" scoped>
#app{
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: repeat(5, 1fr);
}

nav{
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row: 1 / 2;
  background: red;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
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

section#play-area-container{
  grid-row: 2 / 5;
  grid-column: 1 / 4
}

footer {
  grid-row: 5 /6;
  grid-column: 1/4;
  background: red;
}


</style>
