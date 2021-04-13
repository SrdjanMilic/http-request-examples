const btnSendRequest = document.querySelector('.btn-send-request');
btnSendRequest.addEventListener('click', axiosRequest);

function axiosRequest() {
  btnSendRequest.innerText = 'Loading...';
  axios.get('https://fakerapi.it/api/v1/credit_cards?_quantity=1')
    .then(response => {
      let result = response.data.data[0];
      let typeResponse = result.type;
      let cardNumberResponse = result.number;
      let expirationResponse = result.expiration;

      const type = document.querySelector('.type');
      const number = document.querySelector('.card-number');
      const expiration = document.querySelector('.expiration');

      type.innerText = typeResponse;
      number.innerText = cardNumberResponse;
      expiration.innerText = expirationResponse;

      btnSendRequest.innerText = 'Send request';
    })
    .catch(e => {
      alert(`Error has occurred: ${e}`);
    });
}
