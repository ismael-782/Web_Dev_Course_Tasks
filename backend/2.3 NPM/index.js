import superheroes from 'superheroes';

const name = superheroes[Math.floor(Math.random() * superheroes.length)];
console.log(`I am ${name}!`);
