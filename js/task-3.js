const input = document.querySelector('#name-input');
console.log(input.textContent);

const span = document.querySelector('#name-output');
console.log(span.textContent);

input.addEventListener('input', (event) => {
  span.textContent = event.currentTarget.value.trim() || 'Anonymous';
  console.log(span.textContent);
});

const h1Element = document.querySelector('h1');

h1Element.style.color = '#2E2F42';
input.style.borderColor = '#2E2F42';
input.style.borderRadius = '4px';
input.style.width = '360px';
input.style.height = '40px';
input.style.fontFamily = 'Oxygen';
input.style.paddingLeft = '16px';
input.style.fontSize = '16px';


