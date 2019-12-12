<template lang="html">
  <article :class="firstOrLastClass">
    <p class="card-title"> {{card.shortTitle}}</p>
    <img :src="card.image" :alt="card.title"/>
    <p :class="displayStatus">{{card.year}}</p>
  </article>
</template>

<script>
export default {
  name: 'playing-card',
  props: ['card', 'status', 'current'],
  computed: {
    displayStatus() {
      return {
      'hidden': this.status.includes(this.card) !== true,
      'card-year': this.status.includes(this.card) !== false
      }
    },

    firstOrLastClass() {
      return{
        'first': this.current.length !== 1 && this.current.indexOf(this.card) === 0,
        'playing-card': true,
        'last': this.current.length !== 1 && this.current.indexOf(this.card) === this.current.length -1,

      }
    }
  }
}
</script>

<style lang="css" scoped>

.hidden{
  visibility: hidden;
}

.playing-card{
  font-family: 'Open Sans', sans-serif;
  height: 280px;
  min-width: 200px;
  width: 200px;
  background-color: beige;
  border-radius: 10px;
  box-shadow: 0.1em 0.1em 0.4em grey;
  position: relative;
  left: 0px;
  z-index: 1;
}

#hand .playing-card:not(:first-child) {
    margin-left: -20px;
}

#board .playing-card:not(:first-child) {
    margin-left: 10px;
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
  left: calc(50% - 92px);
  bottom: 15px;
  background: white;
  width: 184px;
  min-height: 40px;
  padding: 3px 10px;
  border-radius: 8px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 3;
  border: 3px solid rgba(203,177,54, 1);
  text-align: center;
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
  max-width: 90%;
    max-height: 90%;
    -o-object-fit: cover;
    object-fit: cover;
}

#board .first{
  margin-left: 200px;
}

#board .last{margin-right: 200px;}

/* #board .last:hover, #board .first:hover {
  margin-left: 0;
  margin-right: 0;
} */
</style>
