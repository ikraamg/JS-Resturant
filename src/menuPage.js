
const img = () => {
  const element = document.createElement('img');
  element.src = 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/coffee-restaurant-cafe-menu-template-design-685bde777dc7fd5cc14493fb69d5304d_screen.jpg?ts=1561396633';
  return element;
};
const headline = () => {
  const element = document.createElement('h1');
  element.textContent = 'Our Famous Coffee';
  return element;
};
const description = () => {
  const element = document.createElement('p');

  element.textContent = 'Try our classic range of rich flavours!';
  return element;
};

const arr = [headline, description, img];

export default arr;