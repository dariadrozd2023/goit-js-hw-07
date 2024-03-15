function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const box = document.querySelector('.widget');

changeColorBtn.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  box.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});

box.style.backgroundColor = '#FFFFFF';
box.style.width = '345px';
// box.style.minHeight = '280px';
box.style.padding = '100px 88px';
box.style.fontSize = '16px';
box.style.color = '#2E2F42';

changeColorBtn.style.width = '148px';
changeColorBtn.style.height = '40px';
changeColorBtn.style.backgroundColor = '#4E75FF';
changeColorBtn.style.color = '#ffffff';
changeColorBtn.style.borderRadius = '8px';
changeColorBtn.style.border = '1px solid #4E75FF';
