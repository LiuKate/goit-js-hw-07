const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients')


const ingredient = ingredients.map(item => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = item;

  return ingredientEl
})

ingredientsRef.append(...ingredient)

