import { profile } from '../index.js';


const index = new profile();

const character = process.argv[2];
const iterance = process.argv[3] || 1;

console.log(`character: ${character}, iterance: ${iterance}`);

var myHeaders = new Headers();
myHeaders.append('Accept', 'application/json');
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Authorization', `Bearer ${index.token}`);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow',
};

async function Action(character, iterance) {
  for (let i = 0; i < iterance; i++) {
    const response = await fetch(`https://api.artifactsmmo.com/my/${character}/action/gathering`, requestOptions);
    const result = await response.json();
    const remainingCooldown = result.data.cooldown.remaining_seconds;
    const gatherItem = result.data.details.items[0].code || ''

    /*fetch(`https://api.artifactsmmo.com/my/${character}/action/gathering`, requestOptions)
    .then((response) => response.text())
    //.then((result) => console.log(result))
    .catch((error) => console.log('error', error));*/

    const totalCooldown = result.data.cooldown.total_seconds
    console.log(`${index.colors.fg.green}[${character}] Collecte de ${gatherItem}... ${iterance - i} / ${iterance} restants. \nCooldown / item : ${totalCooldown} s \nTemps restant: ${Math.floor(totalCooldown * (iterance - i) / 60)} m`);

    await new Promise((resolve) => setTimeout(resolve, remainingCooldown * 1000 + 1.2));
  }
  console.log(`[${character}] Collecte terminée`);
}

Action(character, iterance);
