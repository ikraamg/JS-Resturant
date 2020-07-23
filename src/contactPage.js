const map = () => {
  const element = document.createElement('iframe');
  element.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13501080.87651276!2d18.226957231727912!3d-34.295407294928445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c34a689d9ee1251%3A0xe85d630c1fa4e8a0!2sSouth%20Africa!5e0!3m2!1sen!2sza!4v1595522759744!5m2!1sen!2sza';
  return element;
};

const headline = () => {
  const element = document.createElement('h1');

  element.textContent = 'Contact Us';
  return element;
};

const description = () => {
  const element = document.createElement('p');

  element.textContent = 'Find us in South Africa, a wonderful country! Call us at: 05050515-122330';
  return element;
};

const arr = [headline, description, map];

export default arr;