const categoriesEl = document.querySelector('#categories');
const numberOfCategories = categoriesEl.children.length;

console.log(`В списке ${numberOfCategories} категории`)

const itemEl = document.querySelectorAll('.item');

let message = '';

for (let i = 0; i < itemEl.length; i += 1) { 
  const categoryName = itemEl[i].firstElementChild.textContent;
  const categoryCount = itemEl[i].lastElementChild.children.length;

  message = `Категория: ${categoryName}
  Количество элементов: ${categoryCount}`

  console.log(message)
 }
