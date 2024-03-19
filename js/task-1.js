

const categoriesList = document.querySelectorAll('ul#categories li.item');

const categoriesCount = categoriesList.length;
console.log(`Number of categories ${categoriesCount}`);



categoriesList.forEach((category) => {
  const categoryTitle = category.querySelector('h2').textContent;
  // category.querySelector('h2').style.marginTop = '0px';
  // const list = category.querySelector('ul');
  // list.style.padding = '0px';
  const categoryItemCount = category.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItemCount}`);
});

// const categoriesStyle = document.querySelector('#categories');
// categoriesStyle.style.width = '440px';
// categoriesStyle.style.fontSize = '24px';
// categoriesStyle.style.color = '#2E2F42';
// categoriesStyle.style.borderRadius = '8px';
// categoriesStyle.style.margin = '24px auto';
// categoriesStyle.style.paddingLeft = '0px';

// const listItemElements = document.querySelectorAll('#categories li');
// listItemElements.forEach((item) => {
  // item.style.listStyle = 'none';
  // item.style.fontSize = '16px';
  // item.style.borderColor = '#2E2F42';
  // item.style.backgroundColor = '#F6F6FE';
  // item.style.border = '1px solid #808080';
  // item.style.borderRadius = '4px';
  // item.style.padding = '8px 16px';
  // item.style.marginBottom = '8px';
// });
