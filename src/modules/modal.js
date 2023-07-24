const modal = () => {
  const orderCallBtn = document.querySelector('.button');
  const modal = document.querySelector('.header-modal');
  const overlay = document.querySelector('.overlay');
  const modalCloseBtn = document.querySelector('.header-modal__close');
  

  const handleShowModal = (e) => {
    e.preventDefault();
    
    modal.style.display = modal.style.display == '' ? 'block' : '';
    overlay.style.display = overlay.style.display == '' ? 'block' : '';
  }

  orderCallBtn.addEventListener('click', handleShowModal);
  modalCloseBtn.addEventListener('click', handleShowModal);
}

export default modal;