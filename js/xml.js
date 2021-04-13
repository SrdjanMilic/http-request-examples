const btnSendRequest = document.querySelector('.btn-send-request');
btnSendRequest.addEventListener('click', xml);

function xml() {
  btnSendRequest.innerText = 'Loading...';

  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'https://fakerapi.it/api/v1/books?_quantity=1', true);
  xhttp.send();

  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      try {
        let result = JSON.parse(xhttp.response).data[0];
        let titleResponse = result.title;
        let authorResponse = result.author;
        let publishedResponse = result.published;

        const title = document.querySelector('.title');
        const author = document.querySelector('.author');
        const published = document.querySelector('.published');

        title.innerText = titleResponse;
        author.innerText = authorResponse;
        published.innerText = publishedResponse;

        btnSendRequest.innerText = 'Send request';
      } catch (e) {
        alert(`Error has occurred: ${e}`);
      }
    }
  };
}
