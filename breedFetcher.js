const request = require('request');
let breed = process.argv[2].slice(0, 4);
console.log(breed)
const URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`;

request(URL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  let data = JSON.parse(body);

  if (!breed) {
    console.log("This breed is not found!")
  }

  let obj = data[0];
  let breedObj = obj["breeds"];
  let breedObj0 = breedObj[0]
  let breedObj0Desc = breedObj0["description"]
  console.log("Description: ", breedObj0Desc)
});