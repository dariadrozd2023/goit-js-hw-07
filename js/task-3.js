const input = document.querySelector('#name-input');


const span = document.querySelector('#name-output');


input.addEventListener('input', (event) => {
  span.textContent = event.currentTarget.value.trim() || 'Anonymous';

});

const h1Element = document.querySelector('h1');

// h1Element.style.color = '#2E2F42';
// input.style.borderColor = '#2E2F42';
// input.style.borderRadius = '4px';
// input.style.width = '360px';
// input.style.height = '40px';
// input.style.fontFamily = 'Oxygen';
// input.style.paddingLeft = '16px';
// input.style.fontSize = '16px';


