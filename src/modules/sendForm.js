const sendForm = ({ form, someElem = [] }) => {
  const statusBlock = document.createElement('div');
  const loadText = '<div class="preloader__image"></div>';
  const errorText = 'Ошибка...';
  const successText = 'Спасибо! Наш менеджер с вами свяжется!';

  const validate = (list) => {
    let success = true;

    list.forEach(input => {
      if (input.value === "") {
        success = false;
      }

      if (input.classList.contains('error')) {
        success = false;
      }
    })

    return success;
  }

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
  }

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.innerHTML = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    })

    if(someElem) {
      someElem.forEach(elem => {
        const element = document.getElementById(elem.id);
  
        if (elem.type === 'block') {
          formBody[elem.id] = element.textContent;
        } else if (elem.type === 'input') {
          formBody[elem.id] = element.value;
        }
      })
    }

    if (validate(formElements)) {
      sendData(formBody).then(data => {
        statusBlock.textContent = successText;

        formElements.forEach(input => {
          input.value = '';
        })
      })
        .catch(error => {
          statusBlock.textContent = errorText;
        })
    } else {
      statusBlock.textContent = errorText;
    }
  }

  try {
    if (!form) {
      throw new Error('Верните форму на место, пожалуйста)')
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm();

      setTimeout(() => form.removeChild(statusBlock), 2000)
    })
  } catch (error) {
    throw new Error(error.message)
  }
}

export default sendForm;