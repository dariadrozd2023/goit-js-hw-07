//Порахує й виведе в консоль кількість категорій
//в ul#categories, тобто елементів li.item.

const categoriesList = document.querySelectorAll('ul#categories li.item');
// console.log(categoriesList);

const categoriesCount = categoriesList.length;
console.log(`Number of categories ${categoriesCount}`);

//Для кожного елемента li.item у списку ul#categories
// знайде й виведе в консоль текст заголовка
// елемента (тегу <h2>) і кількість елементів у категорії
// (усіх <li>, вкладених у нього).

categoriesList.forEach((category) => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryItemCount = category.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Category елементів: ${categoryItemCount}`);
});
