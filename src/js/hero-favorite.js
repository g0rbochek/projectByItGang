import axios from 'axios';

const test = document.querySelector('.hero-favorites-wrapper');
const KEY = 'favorite-card';
let cardData = JSON.parse(localStorage.getItem(KEY)) ?? {};
if (cardData.length === 0) {
  console.log('hello');
}

// backend
async function connect() {
  const BASE_URL =
    'https://tasty-treats-backend.p.goit.global/api/recipes/6462a8f74c3d0ddd288980d4';
  const { data } = await axios.get(BASE_URL);
  console.log(data);
}
