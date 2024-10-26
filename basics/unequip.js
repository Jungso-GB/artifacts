import { profile } from './index.js';

const index = new profile();

const character = process.argv[2];
const slot = process.argv[3];

var raw = JSON.stringify({
  "slot": slot
});

var myHeaders = new Headers();
myHeaders.append('Accept', 'application/json');
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Authorization', `Bearer ${index.token}`);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body : raw,
  redirect: 'follow',
};

fetch(`https://api.artifactsmmo.com/my/${character}/action/unequip`, requestOptions)
  .then((response) => response.text())
  //.then((result) => console.log(result))
  .catch((error) => console.log('error', error));
