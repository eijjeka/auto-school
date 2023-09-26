'use strict';

const form = document.querySelector('#form');
form.addEventListener('submit', formSend);

async function formSend(e) {
  e.preventDefault();

  const error = formValidate(e.currentTarget);
  console.log('error: ', error);

  if(error) {
    alert(error);
    return
  }

  let formData = new FormData(form);
  console.log(formData);
  let response = await fetch('send_mail.php', {
    method: 'POST',
    body: formData,
  });
  if (response.ok) {
    let result = await response.json();
    // alert(result.message);
    form.reset();
  }

  function formValidate(form) {
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;

    if(name === '' || phone === ''){
        return "Будь ласка заповніть всі поля"
    }
  }
}
