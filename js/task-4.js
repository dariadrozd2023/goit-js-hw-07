const form = document.querySelector('.login-form');
const formInputs = form.querySelectorAll('input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let isFormValid = true;

  formInputs.forEach((input) => {
    if (input.value.trim() === '') {
      alert('All form fields must be filled in');
      isFormValid = false;
    }
  });

  if (isFormValid) {
    const formData = {};
    formInputs.forEach((input) => {
      formData[input.name] = input.value.trim();
    });

    console.log(formData);

    form.reset();
  }
});
