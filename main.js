import './style.css';
import './src/interfaces';

const currentYear = document.querySelector('#year');
const date = new Date();
currentYear.innerHTML = date.getFullYear();

const toggleBtn = document.querySelector('#toggle');
toggleBtn.addEventListener('change', () => {
  document.documentElement.classList.toggle('dark');
});
