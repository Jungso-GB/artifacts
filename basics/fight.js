import { profile } from '../index.js';

const index = new profile();

const character = process.argv[2];

var myHeaders = new Headers();
myHeaders.append('Accept', 'application/json');
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Authorization', `Bearer ${index.token}`);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow',
};

fetch(`https://api.artifactsmmo.com/my/${character}/action/fight`, requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));
