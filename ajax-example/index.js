function request() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      try {
        let array = JSON.parse(this.responseText);

        // for (let i = 0; i < array.length; i++) {
        //   console.log(array[i].name);
        // }

        array.forEach(element => {
          console.log(element.name);
        });

        // Object.values(array).forEach(element => {
        //   console.log(element.name);
        // });


      } catch(err) {
        console.log(err.message + ' in ' + xhttp.responseText);
      }
    }
  };
  xhttp.open('GET', 'http://188.166.11.99/json-example.json', true);
  xhttp.send();
}

request();

