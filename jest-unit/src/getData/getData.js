const axios = require('axios');
const mapArrToString = require('../mapArrToString/mapArrToString');

const getData = async () => {
  try {
    const data = await axios.get('https://jsonplaceholder.typicode.com/users');
    const userIDs = data.data.map(user => user.id);
    return mapArrToString(userIDs);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getData;