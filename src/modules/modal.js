const modal = () => {
  const overlay = document.querySelector('.overlay');
  const openModalBtn = document.querySelectorAll('div[data-modal]');
  const modalCloseBtn = document.querySelectorAll('span[title="Close"]');
  const sertificateDocuments = document.querySelectorAll('.sertificate-document');

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

    if (e.target.hasAttribute('data-modal')) {
      const modalId = e.target.getAttribute('data-modal');
      modalElem = document.querySelector(`.${modalId}`);
      overlay.removeAttribute('data-modal');
      modalElem.classList.remove('show');
    }

    if (e.target.hasAttribute('data-img')) {
      overlay.removeAttribute('data-img');
      overlay.textContent = '';
    }

    overlay.classList.remove('show');
  }

  openModalBtn.forEach(btn => {
    btn.addEventListener('click', showModal)
  });
  modalCloseBtn.forEach(btn => {
    btn.addEventListener('click', closeModal)
  });
  overlay.addEventListener('click', closeModal);
  sertificateDocuments.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      const url = e.target.parentNode.getAttribute('href');
      const img = document.createElement('img')
      img.setAttribute('src', url);
      img.alt = 'document';
      img.classList.add('img-thumbnail')

      overlay.append(img)
      overlay.classList.add('show');
      overlay.setAttribute('data-img', true);
    })
  })
}

export default modal;