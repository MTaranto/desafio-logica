/* Hero level index:
Se XP for até 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante */

let heroPoints = 0
let heroLevel = ''
let heroName = 'Careca'

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a pontuação do seu herói: ', (input) => {
  heroPoints = parseFloat(input);

  if (heroPoints <= 1000) {
    heroLevel = 'Ferro';
  } else if (heroPoints > 1000 && heroPoints < 2001) {
    heroLevel = 'Bronze';
  } else if (heroPoints > 2000 && heroPoints < 5001) {
    heroLevel = 'Prata';
  } else if (heroPoints > 5000 && heroPoints < 7001) {
    heroLevel = 'Ouro';
  } else if (heroPoints > 7000 && heroPoints < 8001) {
    heroLevel = 'Platina';
  } else if (heroPoints > 8000 && heroPoints < 9001) {
    heroLevel = 'Ascendente';
  } else if (heroPoints > 9000 && heroPoints < 10001) {
    heroLevel = 'Imortal';
  } else {
    heroLevel = 'Radiante';
  }

console.log(`O Herói de nome ${heroName} está no nível de ${heroLevel}`)

rl.close();

})