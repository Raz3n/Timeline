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
  },
  {
    title: "Galileo first views the Moon through a telescope",
    shortTitle: "Galileo investigates Moon",
    year: "1609",
    description: "On November 30th, 1609 Galileo aimed his telescope at the Moon.[129] While not being the first person to observe the Moon through a telescope (English mathematician Thomas Harriot had done it four months before but only saw 'a strange spottednesse', Galileo was the first to deduce the cause of the uneven waning as light occlusion from lunar mountains and craters. In his study, he also made topographical charts, estimating the heights of the mountains. The Moon was not what was long thought to have been a translucent and perfect sphere, as Aristotle claimed, and hardly the first 'planet', 'an eternal pearl to magnificently ascend into the heavenly empyrian', as put forth by Dante",
    image: "https://cdn.britannica.com/29/18829-050-3F57E4F8/Galileo-Justus-Sustermans-Uffizi-Gallery-Florence-1637.jpg"
  },
  {
    title: "Montgolfier Brothers carry out the first free flight of a hot air balloon across Paris",
    shortTitle: "First hot air balloon flight",
    year: "1783",
    description: "The French brothers Joseph-Michel and Jacques-Étienne Montgolfier developed a hot air balloon in Annonay, Ardeche, France and demonstrated it publicly on September 19, 1783, making an unmanned flight lasting 10 minutes. After experimenting with unmanned balloons and flights with animals, the first balloon flight with humans aboard, a tethered flight, performed on or around October 15, 1783, by Jean-Francois Pilatre de Rozier who made at least one tethered flight from the yard of the Reveillon workshop in the Faubourg Saint-Antoine. Later that same day, Pilatre de Rozier became the second human to ascend into the air, reaching an altitude of 26 m (85 ft), the length of the tether. The first free flight with human passengers was made a few weeks later, on November 21, 1783.",
    image: "https://ageofrevolution.org/wp-content/uploads/2018/05/Montgolfier-balloon.jpg"
  },
  {
    title:"Eugene was born under a golden star",
    shortTitle: "Eugene was born",
    year: "1992" ,
    description: "You know who he is",
    image: "https://codeclan.com/wp-content/uploads/2019/10/Eugene.jpg"
  },
  {
    title: "Assassination of President John F Kennedy",
    shortTitle: "JFK assassination",
    year: "1963",
    description: "John Fitzgerald Kennedy, the 35th President of the United States, was assassinated on November 22, 1963, at 12:30 p.m. Central Standard Time in Dallas, Texas, while riding in a presidential motorcade through Dealey Plaza. Kennedy was riding with his wife Jacqueline, Texas Governor John Connally, and Connally's wife Nellie when he was fatally shot by former U.S. Marine Lee Harvey Oswald firing in ambush from a nearby building. Governor Connally was seriously wounded in the attack. The motorcade rushed to Parkland Memorial Hospital where President Kennedy was pronounced dead about 30 minutes after the shooting.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/John_F._Kennedy%2C_White_House_color_photo_portrait.jpg/1200px-John_F._Kennedy%2C_White_House_color_photo_portrait.jpg"
  },
  {
    title: "First Eurovision song contest held",
    shortTitle: "First Eurovision",
    year: "1956",
    description: "The Eurovision Song Contest 1956 was the inaugural edition of the annual Eurovision Song Contest. It took place in Lugano, Switzerland, and was held at the Teatro Kursaal on Thursday 24 May. Organised by the European Broadcasting Union, the pan-European music competition was inspired by the Italian Sanremo Music Festival. Lohengrin Filipello hosted the first contest which lasted approximately 1 hour and 40 minutes. Seven countries participated, with each of them performing two songs. Two jury members from all participating countries cast their votes in secret, based on which song was their favourite.",
    image: "https://www.disguise.one/media/4137/eurovision-main.jpg"
  },
  {
    title: "Death of King Henry VIII" ,
    shortTitle: "Henry VII dies",
    year: "1547",
    description: "Henry VIII (28 June 1491 – 28 January 1547) was King of England from 1509 until his death in 1547. He was the second Tudor monarch, succeeding his father Henry VII. Henry is best known for his six marriages, in particular his efforts to have his first marriage (to Catherine of Aragon) annulled. His disagreement with the Pope on the question of such an annulment led Henry to initiate the English Reformation, separating the Church of England from papal authority. He appointed himself the Supreme Head of the Church of England and dissolved convents and monasteries, for which he was excommunicated. Henry is also known as 'the father of the Royal Navy', as he invested heavily in the navy, increasing its size from a few to more than 50 ships, and established the Navy Board." ,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Workshop_of_Hans_Holbein_the_Younger_-_Portrait_of_Henry_VIII_-_Google_Art_Project.jpg/440px-Workshop_of_Hans_Holbein_the_Younger_-_Portrait_of_Henry_VIII_-_Google_Art_Project.jpg"
  },
  {
    title: "Leonardo Da Vinci paints the Mona Lisa",
    shortTitle: "Creation of the Mona Lisa",
    year: "1503",
    description: "The Mona Lisa is a half-length portrait painting by the Italian artist Leonardo da Vinci. It is considered an archetypal masterpiece of the Italian Renaissance, and has been described as 'the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world.' The Mona Lisa is also one of the most valuable paintings in the world. It holds the Guinness World Record for the highest known insurance valuation in history at US$100 million in 1962 (equivalent to $852,139,072.85 as of 2019).",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
  },
  {
    title: "Beginning of the French Revolution",
    shortTitle: "French Revolution",
    year: "1789",
    description:"The French Revolution was a period of far-reaching social and political upheaval in France and its colonies beginning in 1789. The Revolution overthrew the monarchy, established a republic, catalyzed violent periods of political turmoil, and finally culminated in a dictatorship under Napoleon who brought many of its principles to areas he conquered in Western Europe and beyond. Inspired by liberal and radical ideas, the Revolution profoundly altered the course of modern history, triggering the global decline of absolute monarchies while replacing them with republics and liberal democracies. Through the Revolutionary Wars, it unleashed a wave of global conflicts that extended from the Caribbean to the Middle East. Historians widely regard the Revolution as one of the most important events in human history" ,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Anonymous_-_Prise_de_la_Bastille.jpg/480px-Anonymous_-_Prise_de_la_Bastille.jpg"
  },
  {
    title: "Death of Elvis Presley",
    shortTitle: "Elvis dies",
    year: "1977",
    description: "Elvis Aaron Presley, also known mononymously as Elvis, was an American singer and actor. Regarded as one of the most significant cultural icons of the 20th century, he is often referred to as the 'King of Rock and Roll' or simply 'the King'.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elvis_Presley_promoting_Jailhouse_Rock.jpg/440px-Elvis_Presley_promoting_Jailhouse_Rock.jpg"
  },
  {
    title: "Netflix is founded",
    shortTitle: "Netflix created",
    year: "1998",
    description: "Netflix, Inc. is an American media-services provider and production company headquartered in Los Gatos, California, founded in 1997 by Reed Hastings and Marc Randolph in Scotts Valley, California. The company's primary business is its subscription-based streaming service which offers online streaming of a library of films and television programs, including those produced in-house",
    image: "https://aliabdaal.com/content/images/size/w2000/2019/03/freestocks-org-618080-unsplash-min.jpg"
  }
]);
