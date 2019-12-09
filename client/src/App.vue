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
      Board Area
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
</style>
