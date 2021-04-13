const btnSendRequest = document.querySelector('.btn-send-request');
btnSendRequest.addEventListener('click', fetchData);

function fetchData() {
  btnSendRequest.innerText = 'Loading...';

  fetch('https://fakerapi.it/api/v1/persons?_quantity=1')
    .then(response => {
      if (response.ok) response.json()
        .then(data => {
          let result = data.data[0];
          let firstNameResponse = result.firstname;
          let lastNameResponse = result.lastname;
          let emailResponse = result.email;
          let birthdayResponse = result.birthday;

          const name = document.querySelector('.name');
          const email = document.querySelector('.email');
          const birthday = document.querySelector('.birthday');

          name.innerText = `${firstNameResponse} ${lastNameResponse}`;
          email.innerText = emailResponse;
          birthday.innerText = birthdayResponse;

          btnSendRequest.innerText = 'Send request...';
        });
    })
    .catch(e => alert(`Error has occurred: ${e}`));
}
