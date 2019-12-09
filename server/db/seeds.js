use timeline;
db.dropDatabase();



db.cards.insertMany([
  {
    title: "Invention of chess",
    shortTitle: "Invention of chess",
    year: "570",
    description: "Chess is a two-player strategy board game played on a checkered board with 64 squares arranged in an 8×8 grid. The game is played by millions of people worldwide. Chess is believed to be derived from the Indian game chaturanga sometime before the 7th century.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ChessSet.jpg/500px-ChessSet.jpg"
  },
  {
    title: "First use of toilet paper",
    shortTitle: "First use of toilet paper",
    year: "589",
    description: "Although paper had been known as a wrapping and padding material in China since the 2nd century BC,[3] the first documented use of toilet paper in human history dates back to the 6th century AD, in early medieval China.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Toiletpapier_%28Gobran111%29.jpg/440px-Toiletpapier_%28Gobran111%29.jpg"
  },
  {
    title: "Emergence of number zero",
    shortTitle: "Emergence of number zero",
    year: "628",
    description: "The first known documented use of zero dates to AD 628, and appeared in the Brāhmasphuṭasiddhānta, the main work of the Indian mathematician Brahmagupta. He treated 0 as a number and discussed operations involving it, including division.",
    image: "https://theosophical.files.wordpress.com/2011/06/zero2.jpg"
  },
  {
    title: "Discovery of universal gravitation",
    shortTitle: "Discovery of universal gravitation",
    year: "1666",
    description: "Legend has it that a young Isaac Newton was sitting under an apple tree when he was bonked on the head by a falling piece of fruit, a 17th-century “aha moment” that prompted him to suddenly come up with his law of gravity",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Honeycrisp.jpg/440px-Honeycrisp.jpg"
  },
  {
    title: "Invention of the can",
    shortTitle: "Invention of the can",
    year: "1810",
    description: "The tin can process was allegedly developed by Frenchman Philippe de Girard, who came to London and used British merchant Peter Durand as an agent to patent his own idea in 1810.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Drinking_can_ring-pull_tab.jpg"
  },
  {
    title: "Invention of the tea bag",
    shortTitle: "Invention of the tea bag",
    year: "1908",
    description: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Tea_bag.JPG/1920px-Tea_bag.JPG"
  },
  {
    title: "Invention of the electrical guitar",
    shortTitle: "Invention of the electrical guitar",
    year: "1934",
    description: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Electro-Spanish_Ken_Roberts_Model.png"
  },
  {
    title: "First sighting of a flying saucer",
    shortTitle: "First sighting of a flying saucer",
    year: "1947",
    description: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/df/PurportedUFO2.jpg"
  },
  {
    title: "First woman in space",
    shortTitle: "First woman in space",
    year: "1963",
    description: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Valentina_Tereshkova_%28January_1963%29.jpg"
  },
  {
    title: "First space shuttle launch",
    shortTitle: "First space shuttle launch",
    year: "1981",
    description: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Space_Shuttle_Columbia_launching.jpg/520px-Space_Shuttle_Columbia_launching.jpg"
  }

]);
