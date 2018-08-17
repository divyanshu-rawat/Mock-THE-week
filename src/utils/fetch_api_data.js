import axios from 'axios';

const BASE_URL = 'https://mock-the-week.herokuapp.com';

function get_food_jokes_data() {
  const url = `${BASE_URL}/api/jokes/food`;
  return axios.get(url).then(response => response.data)
  .catch( (err) =>{
  	console.log('err',err);
  	return err;
  })
}

function get_celebrity_jokes_data() {
  const url = `${BASE_URL}/api/jokes/celebrity`;
  return axios.get(url).then(response => response.data)
  .catch( (err) =>{
  	console.log('err',err);
  	return err;
  })
}

export {getFoodData, getCelebrityData};