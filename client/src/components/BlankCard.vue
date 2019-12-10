<template lang="html">
  <article class="blank-playing-card">
    <!-- <p class="card-title"> {{card.shortTitle}}</p>
    <img :src="card.image" alt="Title"/>
    <p class="hidden">{{card.year}}</p> -->
  </article>
</template>

<script>
export default {
  name: 'blank-card'
}
</script>

<style lang="css" scoped>
.blank-playing-card {
  /* background: rgb(0,0,0,0.01);
  box-shadow: 0.1em 0.1em 0.4em grey; */
  padding: 1em;
  border-radius: 2em;
  min-height: 16em;
  width: 10em;
  height: 11em;
  align-items: center;
  margin: 0.2em;

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-wrap: wrap;
  flex-wrap: nowrap;

    justify-content: flex-start;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  -webkit-box-align: start;
  -ms-flex-align: start;
}

</style>
