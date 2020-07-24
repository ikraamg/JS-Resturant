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

const renderPage = (pageName) => {
  cleanPage();
  pageDict[pageName].addToNode(content);
};

const createPageButton = (name) => {
  const btn = document.createElement('button');
  btn.className = 'center navBtns';
  btn.id = name;
  btn.textContent = name.toUpperCase();
  navBar.appendChild(btn);
  btn.addEventListener('click', () => renderPage(name));
};

const pageButtons = ['home', 'menu', 'contact'];
pageButtons.forEach(item => createPageButton(item));

renderPage('home');
