import axios from 'axios';

const BASE_URL = 'https://mock-the-week.herokuapp.com';

function getFoodData() {
  const url = `${BASE_URL}/api/jokes/food`;
  return axios.get(url).then(response => response.data);
}

function getCelebrityData() {
  const url = `${BASE_URL}/api/jokes/celebrity`;
  return axios.get(url).then(response => response.data);
}

export {getFoodData, getCelebrityData};