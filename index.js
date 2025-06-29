const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];



const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner

// String destructuring for animal sounds
const animalSounds = "cow horse sheep pig chicken";
const [moo, neigh, baa, oink, cluck] = animalSounds.split(" ");

// String destructuring for traditional animal names
const animals = "cow sheep pig chicken";
const [bessie, dolly, babe, little] = animals.split(" ");

// String destructuring for traditional animal colors
const animalColors = "cow sheep pig";
const [blackAndWhite, black, pink] = animalColors.split(" ");

// Array destructuring for rainbow colors
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

// Array destructuring for rainbow colors using initials
const [r, o, y, g, b, indg, v] = rainbowColors;

// Object destructuring for muppet info
const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
  songs: [
    "Rainbow Connection",
    "Moving Right Along",
    "I’m Going to Go Back There Someday",
    "I Hope That Something Better Comes Along"
  ],
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy"
};

const { muppetName, color, song, job, partner, songs } = muppet;
const [ , song2, , song4 ] = songs;
const { nestedJob, nestedPartner } = muppet;

module.exports = {
  moo, neigh, baa, oink, cluck,
  bessie, dolly, babe, little,
  blackAndWhite, black, pink,
  red, orange, yellow, green, blue, indigo, violet,
  r, o, y, g, b, v, indg,
  muppetName, color, song, job, partner,
  song2, song4, nestedJob, nestedPartner
};
