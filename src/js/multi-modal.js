const modals = ['data-modal-order'];

modals.forEach(element => {
  const openModalSelector = element + '-open';
  const closeModalSelector = element + '-close';

  const openModalBtns = document.querySelectorAll(`[${openModalSelector}]`);
  const closeModalBtns = document.querySelectorAll(`[${closeModalSelector}]`);
  const modal = document.querySelector(`[${element}]`);

  if (!modal) logModalError('Can`t find Modal with attribute ' + modal);
  if (openModalBtns.length === 0)
    logModalError(
      'Can`t find Open modal button with attribute ' + openModalSelector
    );
  if (closeModalBtns.length === 0)
    logModalError(
      'Can`t find Close modal button with attribute ' + closeModalSelector
    );
  if (!modal || openModalBtns.length === 0 || closeModalBtns.length === 0)
    return;

  openModalBtns.forEach(openBtn =>
    openBtn.addEventListener('click', e => toggleModal(e, modal))
  );
  closeModalBtns.forEach(closeBtn =>
    closeBtn.addEventListener('click', e => toggleModal(e, modal))
  );
});
export default function toggleModal(event, modal) {
  const dataAtr = event?.target?.dataset?.title;
  const title = document.querySelector('.modal__title');
  const orderBtn = document.querySelector('.modal-submit-btn');

  title.textContent = dataAtr ? 'Замовити дзвінок' : 'ЗАПИСАТИСЬ НА НАВЧАННЯ';
  dataAtr
    ? orderBtn.classList.add('modal-submit-btn-call')
    : orderBtn.classList.remove('modal-submit-btn-call');

  document.body.classList.toggle('modal-open');
  modal.classList.toggle('is-hidden');
}

function logModalError(text) {
  const styles = 'color: #bada55';
  console.log('%c' + text, styles);
}
