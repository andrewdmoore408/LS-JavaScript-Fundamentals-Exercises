// const rlSync = require('readline-sync');

// let phrase = rlSync.question('Please enter a phrase: ');

// console.log(`There are ${phrase.length} characters in "${phrase}".`);

// Further exploration: not counting spaces
const rlSync = require('readline-sync');

const phrase = rlSync.question('Please enter a phrase: ');

const noSpacesPhrase = phrase.replace(' ', '');

console.log(`There are ${noSpacesPhrase.length} characters in "${phrase}", not including spaces.`);
