const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  const URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`;

  request(URL, (error, response, body) => {
    if (error !== null) {
      callback(error, null);
      return;
    }

    if (response.statusCode === 404) {
      callback(new Error('Breed not found'), null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(new Error('HTTP status not OK'), null);
      return;
    }

    let data = JSON.parse(body);

    if (data.length === 0) {
      callback(new Error('Breed not found'), null);
      return;
    }

    let obj = data[0];
    let breedObj = obj["breeds"];
    if (breedObj.length === 0) {
      callback(new Error('Breed not found'), null);
      return;
    }

    let breedObj0 = breedObj[0];
    let des = breedObj0["description"];
    callback(null, des);
  });
}
module.exports = { fetchBreedDescription };