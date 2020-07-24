const homePage = (() => {
  const img = () => {
    const element = document.createElement('img');
    element.src = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80';
    element.id = 'homeImg';
    return element;
  };

  const headline = () => {
    const element = document.createElement('h1');

    element.textContent = 'Beau Café';
    return element;
  };

  const description = () => {
    const element = document.createElement('h3');

    element.textContent = 'We imagine a world where there’s no such thing as a bad cup of coffee and all coffee farmers live prosperously.Our values include providing fair wages for workers, giving back to the communities we work with, and serving great coffee.';
    return element;
  };

  const addToNode = (parentNode) => {
    const arr = [headline, description, img];
    for (let i = 0; i < arr.length; i += 1) {
      parentNode.appendChild(arr[i]());
    }
    return parentNode;
  };
  return { addToNode };
})();

export default homePage;