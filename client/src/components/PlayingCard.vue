<template lang="html">
  <article class="playing-card">
    <p class="card-title"> {{card.shortTitle}}</p>
    <img :src="card.image" :alt="card.title"/>
    <p class="hidden">{{card.year}}</p>
  </article>
</template>

<script>
export default {
  name: 'playing-card',
  props: ['card']
}
</script>

<style lang="css" scoped>

.hidden{
  visibility: hidden;
}


.playing-card{
  /* background: beige;
    box-shadow: 0.1em 0.1em 0.4em grey;
    padding: 1em;
    border-radius: 2em;
    height: 280px;
    width: 200px; */
    /* min-height: 16em;
    width: 10em;
    height: 11em; */
    /* display: grid;
    grid-template-rows: repeat(11, 1em);
    grid-template-columns: repeat(10, 1em); */
    /* display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: wrap;
    flex-wrap: nowrap;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    margin: 0.2em;
    justify-content: flex-start;
    box-sizing: border-box; */

  /* display: flex; */
  height: 280px;
  width: 200px;
  background-color: beige;
  border-radius: 10px;
  box-shadow: 0.1em 0.1em 0.4em grey;
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
}

.playing-card:not(:first-child) {
    margin-left: -20px;
}

.playing-card:hover  {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
}

.playing-card .sortable-chosen {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
}

.playing-card .card-title{
/* background: white;
min-width: 90%;
padding: 0.5em 0;
border-radius: 0.2em;
align-items: center;
display: flex;
justify-content: center;
align-self: center;
margin: auto;
order: 1; */
/* grid-row: 10 / 11;
grid-column: 1/10; */
/* z-index: 1;
padding: 0.2em 1em; */

}

.playing-card img {
  grid-row: 1 / 11;
  grid-column: 1/10;
  max-width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

</style>
