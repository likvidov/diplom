const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement('div');


  const submitForm = () => {

  }

  try {
    if (!form) {
      throw new Error('Верните форму на место, пожалуйста)')
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm();

      // setTimeout(() => form.removeChild(statusBlock), 3000)
    })
  } catch (error) {
    throw new Error(error.message)
  }
}

export default sendForm;