<template lang="html">
  <article class="playing-card">
    <p class="card-title"> {{card.shortTitle}}</p>
    <img :src="card.image" alt="Title"/>
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
  background: beige;
    box-shadow: 0.1em 0.1em 0.4em grey;
    padding: 1em;
    border-radius: 2em;
    min-height: 16em;
    width: 10em;
    height: 11em;
    display: -webkit-box;
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
}

.playing-card .card-title{
  background: white;
min-width: 100%;
padding: 0.5em 0;
border-radius: 0.2em;
align-items: center;
display: flex;
justify-content: center;
/* align-self: flex-end; */
order: 1;
}

.playing-card img {
  max-width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

</style>
