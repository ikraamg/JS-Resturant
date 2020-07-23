import './style.css';
import homePage from './homePage';
import contactPage from './contactPage';
import menuPage from './menuPage';

const pageDict = {
  home: homePage,
  contact: contactPage,
  menu: menuPage,
};

const navBar = document.querySelector('.nav');
const content = document.querySelector('#content');

const cleanPage = () => {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
};

const renderPage = (page) => {
  cleanPage();
  const arr = page;
  for (let i = 0; i < arr.length; i += 1) {
    content.appendChild(arr[i]());
  }
};

function createPageButton(name) {
  const btn = document.createElement('button');
  btn.className = 'center navBtns';
  btn.id = name;
  btn.textContent = name.toUpperCase();
  navBar.appendChild(btn);
  btn.addEventListener('click', () => renderPage(pageDict[name]));
}

const pageButtons = ['home', 'menu', 'contact'];
pageButtons.forEach(item => createPageButton(item));

renderPage(pageDict.home);