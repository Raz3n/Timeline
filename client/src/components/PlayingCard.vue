<template lang="html">
  <article class="playing-card">
    <p class="card-title"> {{card.shortTitle}}</p>
    <img :src="card.image" :alt="card.title"/>
    <p class="card-year">{{card.year}}</p>
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
  min-width: 200px;
  width: 200px;
  background-color: beige;
  border-radius: 10px;
  box-shadow: 0.1em 0.1em 0.4em grey;
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
  z-index: 1;
}

#hand .playing-card:not(:first-child) {
    margin-left: -20px;
}

#board .playing-card:not(:first-child) {
    margin: 10px;
}


#hand .playing-card:hover  {
  transform: translateX(-20px);
  transition: 0.4s ease-out;
}

#hand .playing-card:hover ~ .playing-card:not {
  transform: translateX(20px);
  transition: 0.4s ease-out;
}

.playing-card .sortable-chosen {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
}

.playing-card .card-title{
  font-weight: 300;
  position: absolute;
  left: calc(50% - 82px);
  bottom: 15px;
  background: white;
  width: 165px;
  min-height: 40px;
  padding: 3px 10px;
  border-radius: 8px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 3;
  border: 3px solid rgba(203,177,54, 1);
  text-align: center;
    /* justify-content: center;
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
.playing-card .card-year{
  position: absolute;
    font-size: 1.2em;
    color: white;
    background: rgb(78,84,5);
background: linear-gradient(90deg, rgba(78,84,5,1) 0%, rgba(142,133,3,1) 41%, rgba(255,220,0,1) 93%);
    padding: 4px 10px;
    min-width: 60px;
    text-align: center;
    height: 19px;
    bottom: calc(22% - 10px);
    z-index: 2;
    left: calc(50% - 46px);
    box-sizing: content-box;
    border: 3px solid rgba(203,177,54, 1);
}

.playing-card img {
  position: relative;
  left: calc(50% - 90px);
  margin-top: 5%;
  height: 260px;
  width: 180px;
  /* z-index: -1; */
  max-width: 90%;
    max-height: 90%;
    -o-object-fit: cover;
    object-fit: cover;
}

</style>
