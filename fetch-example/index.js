const fetch = require('node-fetch');

fetch('http://188.166.11.99/json-example.json')
  .then(response => {
    return response.json();
  })
  .then(data => {

    // console.log(data);

    data.forEach(element => {
      console.log(element.name);
    });

  })
  .catch(error => {
    console.log('Error:', error);
  });
