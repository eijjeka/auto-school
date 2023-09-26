import Notiflix from 'notiflix';
import toggleModal from './multi-modal';

const modal = document.querySelector('[data-modal-order]');

const form = document.querySelector('#form');
form.addEventListener('submit', formSend);
async function formSend(e) {
  console.log(e);
  e.preventDefault();

  const error = formValidate(e.currentTarget);
  console.log('error: ', error);

  if(error) {
    Notiflix.Notify.failure(error);
    return
  }

  let formData = new FormData(form);
  let response = await fetch('send_mail.php', {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    let result = await response.json();
    toggleModal(e, modal);
    Notiflix.Notify.success(result.message);
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
