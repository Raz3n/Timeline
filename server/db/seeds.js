use timeline;
db.dropDatabase();



db.cards.insertMany([
  {
    shortTitle: "Invention of chess",
    year: "570",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ChessSet.jpg/500px-ChessSet.jpg"
  },
  {
    shortTitle: "First use of toilet paper",
    year: "589",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Toiletpapier_%28Gobran111%29.jpg/440px-Toiletpapier_%28Gobran111%29.jpg"
  },
  {
    shortTitle: "Emergence of number zero",
    year: "628",
    image: "https://theosophical.files.wordpress.com/2011/06/zero2.jpg"
  },
  {
    shortTitle: "Discovery of universal gravitation",
    year: "1666",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Honeycrisp.jpg/440px-Honeycrisp.jpg"
  },
  {
    shortTitle: "Invention of the can",
    year: "1810",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Drinking_can_ring-pull_tab.jpg"
  },
  {
    shortTitle: "Invention of the tea bag",
    year: "1908",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Tea_bag.JPG/1920px-Tea_bag.JPG"
  },
  {
    shortTitle: "Invention of the electrical guitar",
    year: "1934",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Electro-Spanish_Ken_Roberts_Model.png"
  },
  {
    shortTitle: "First sighting of a flying saucer",
    year: "1947",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/df/PurportedUFO2.jpg"
  },
  {
    shortTitle: "First woman in space",
    year: "1963",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Valentina_Tereshkova_%28January_1963%29.jpg"
  },
  {
    shortTitle: "First space shuttle launch",
    year: "1981",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Space_Shuttle_Columbia_launching.jpg/520px-Space_Shuttle_Columbia_launching.jpg"
  }

]);
