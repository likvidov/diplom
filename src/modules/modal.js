const modal = () => {
  const overlay = document.querySelector('.overlay');
  const openModalBtn = document.querySelectorAll('div[data-modal]');
  const modalCloseBtn = document.querySelectorAll('span[title="Close"]');

  const showModal = (e) => {
    e.preventDefault();

    const modalId = e.target.closest('div').getAttribute('data-modal');
    const modalElem = document.querySelector(`.${modalId}`);

    modalElem.classList.add('show');
    overlay.classList.add('show');
    overlay.setAttribute('data-modal', modalId)
  }

  const closeModal = (e) => {
    let modalElem = e.target.closest('.show');

    if (e.target == overlay) {
      const modalId = e.target.getAttribute('data-modal');
      modalElem = document.querySelector(`.${modalId}`);
    }

    modalElem.classList.remove('show');
    overlay.classList.remove('show');
    overlay.removeAttribute('data-modal');
  }

  openModalBtn.forEach(btn => {
    btn.addEventListener('click', showModal)
  });
  modalCloseBtn.forEach(btn => {
    btn.addEventListener('click', closeModal)
  });
  overlay.addEventListener('click', closeModal);
}

export default modal;