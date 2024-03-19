function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
const input = document.querySelector('input[type="number"]');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    return;
  }

  boxesContainer.textContent = '';

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
    // box.style.margin = 'auto';
  }

  input.value = '';
}

function destroyBoxes() {
  boxesContainer.textContent = '';
}

// const controlsDiv = document.querySelector('#controls');
// controlsDiv.style.width = '486px';
// controlsDiv.style.height = '104px';
// controlsDiv.style.display = 'flex';
// controlsDiv.style.gap = '16px';
// controlsDiv.style.padding = '32px';
// controlsDiv.style.backgroundColor = '#F6F6FE';
// controlsDiv.style.margin = '16px auto';

// input.style.width = '150px';
// input.style.borderRadius = '8px';
// input.style.border = '1px solid #808080';
// input.style.color = '#2E2F42';

// createBtn.style.backgroundColor = '#4E75FF';
// createBtn.style.width = '120px';
// createBtn.style.border = '1px solid #4E75FF';
// createBtn.style.borderRadius = '8px';
// createBtn.style.color = '#ffffff';

// destroyBtn.style.backgroundColor = '#FF4E4E';
// destroyBtn.style.width = '120px';
// destroyBtn.style.border = '1px solid #FF4E4E';
// destroyBtn.style.borderRadius = '8px';
// destroyBtn.style.color = '#ffffff';

// boxesContainer.style.width = '486px';
// boxesContainer.style.display = 'flex';
// boxesContainer.style.flexWrap = 'wrap';
// boxesContainer.style.gap = '16px';
// boxesContainer.style.padding = '32px';
// boxesContainer.style.margin = '16px auto';
// boxesContainer.style.backgroundColor = '#F6F6FE';
