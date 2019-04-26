const axios = require('axios');

axios.get('http://188.166.11.99/json-example.json')

  .then(response => {

    // console.log(response.data);

    response.data.forEach(element => {
      console.log(element.company.name);
    });

  })

  .catch(error => {
    console.log(error);
  });