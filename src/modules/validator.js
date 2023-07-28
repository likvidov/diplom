const validator = () => {
  const nameInputs = document.querySelectorAll('input[name=fio]');
  const phoneInputs = document.querySelectorAll('input[name=phone]');

  nameInputs.forEach(item => {
    item.addEventListener('input', (e) => {
      item.value = item.value.replace(/[^а-яa-z\s]+/gim, "");

      if (item.value.length < 2) {
        item.classList.add('error');
      } else {
        item.classList.remove('error');
      }

      if (item.value == '') {
        item.classList.remove('error');
      }
    })
  })

  phoneInputs.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/[^\d\(\)\-\+]+/gi, "");

      if (item.value.length >= 11 && item.value.length <= 16) {
        item.classList.remove('error');
      } else {
        item.classList.add('error');
      }

      if (item.value == '') {
        item.classList.remove('error');
      }
    })
  })
}

export default validator;