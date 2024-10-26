import { profile } from './index.js';

const index = new profile();

const character = process.argv[2];
const x = process.argv[3];
const y = process.argv[4];

console.log('character: ' + character + ' x: ' + x + ' y: ' + y);

var raw = JSON.stringify({
  x: x,
  y: y,
});

var myHeaders = new Headers();
myHeaders.append('Accept', 'application/json');
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Authorization', `Bearer ${index.token}`);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow',
};

fetch(
  `https://api.artifactsmmo.com/my/${character}/action/move`,
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
