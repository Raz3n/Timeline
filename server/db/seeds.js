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
    description: "First appearing commercially around 1904, tea bags were successfully marketed about 1908 by the tea and coffee importer Thomas Sullivan from New York, who shipped his silk tea bags around the world. The loose tea was intended to be removed from the bags by customers, but they found it easier to brew the tea with the tea still enclosed in the porous bags. The first tea bag packing machine was invented in 1929 by Adolf Rambold for the German company Teekanne.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Tea_bag.JPG/1920px-Tea_bag.JPG"
  },
  {
    title: "Invention of the electrical guitar",
    shortTitle: "Invention of the electrical guitar",
    year: "1931",
    description: "Invented in 1931, the electric guitar was adopted by jazz guitar players, who wanted to play single-note guitar solos in large big band ensembles. Early proponents of the electric guitar on record include Les Paul, Lonnie Johnson and Charlie Christian. During the 1950s and 1960s, the electric guitar became the most important instrument in popular music and has since served as a major component in the development of electric blues, rock and roll, rock music, heavy metal music and many other genres of music.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Electro-Spanish_Ken_Roberts_Model.png"
  },
  {
    title: "First sighting of a flying saucer",
    shortTitle: "First sighting of a flying saucer",
    year: "1947",
    description: 'Whilst flying near Mount Rainier, Washington, US citizen Kenneth Arnold reported seeing 9 brightly reflecting vehicles in the sky. He described the motion of the craft as "like a saucer if you skip it across water", leading to the term "flying saucer". Immediately following the report, hundreds of sightings of usually saucer-like objects were reported across the United States. On July 9, the Army Air Force Directorate of Intelligence, assisted by the FBI, began a secret study of the best of the flying saucer reports, of which Arnold’s was included.',
    image: "https://upload.wikimedia.org/wikipedia/commons/d/df/PurportedUFO2.jpg"
  },
  {
    title: "First woman in space",
    shortTitle: "First woman in space",
    year: "1963",
    description: "The first woman in space was Soviet cosmonaut Valentina Tereshkova, who flew on a solo mission on the Vostok 6 on June 16 1963 in 1963. She orbited the Earth 48 times, spent almost three days in space, and remains the youngest woman to have flown into space and the only woman to have been on a solo space mission.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Valentina_Tereshkova_%28January_1963%29.jpg"
  },
  {
    title: "First space shuttle launch",
    shortTitle: "First space shuttle launch",
    year: "1981",
    description: "The first space shuttle launch occurred on 12 April 1981. It was named STS-1 and was carried out by NASA's Space Shuttle program. The launch occurred on the 20th anniversary of the first human spaceflight. This was a coincidence rather than a celebration of the anniversary; a technical problem had prevented STS-1 from launching two days earlier, as was planned. IMAX cameras filmed the launch, landing, and mission control during the flight, for a film entitled Hail Columbia!, which debuted in 1982.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Space_Shuttle_Columbia_launching.jpg/520px-Space_Shuttle_Columbia_launching.jpg"
  }

]);
