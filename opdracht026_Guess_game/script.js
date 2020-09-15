let name = prompt('Welkom! Wat is jouw naam?');
alert('Hey, ' + name);

let guess = prompt('Voer een nummer in van 0 tot 25 om te beginnen met raden...');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
let answer = getRandomInt(25);

while (parseInt(guess) !== answer) {
    alert('Dat is niet correct');
    guess = prompt('Probeer het nog eens');
}
alert('Gefeliciteerd, je hebt gewonnen');

alert('Dag ' + name + ', tot de volgende keer');

