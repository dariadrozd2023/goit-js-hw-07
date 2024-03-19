const form = document.querySelector('.login-form');
const formInputs = form.querySelectorAll('input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let isFormValid = true;

  formInputs.forEach((input) => {
    if (input.value.trim() === '') {
      isFormValid = false;
    }
  });

  if (isFormValid === false) {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {};
  formInputs.forEach((input) => {
    formData[input.name] = input.value.trim();
  });

  console.log(formData);

  form.reset();
});

// form.style.width = '408px';

// form.style.display = 'flex';
// form.style.flexWrap = 'wrap';
// form.style.flexDirection= "column";
// form.style.gap = '8px';
// form.style.padding = '24px';

// const btn = form.querySelector('button');
//   btn.style.backgroundColor = '#4E75FF'
//   btn.style.height = '40px';
//   btn.style.width = '86px'
//   btn.style.color = '#ffffff'
//   btn.style.border = '1px solid #4E75FF'
//   btn.style.borderRadius = '8px'

// const labels = form.querySelectorAll('label');
// labels.forEach((label)=>{
//   label.style.display = 'flex';
//   label.style.flexWrap = 'wrap';
//   label.style.flexDirection = 'column';

//   label.style.width = '360px'

//   label.style.color = '#2E2F42'
//   label.style.fontSize = '24px'
//   label.style.gap = '8px '
//   // // label.style.height = '40px'
//   const labelInput = label.querySelectorAll('input');
//   labelInput.forEach((input)=>{
//     input.style.height = '40px';
//     input.style.border = '1px solid #808080';
//     input.style.borderRadius = '4px'
//   }
//   )

// });
